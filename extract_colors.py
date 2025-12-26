
import cv2
import numpy as np
from sklearn.cluster import KMeans
from collections import Counter
import json

def get_dominant_colors(image_path, k=5):
    img = cv2.imread(image_path)
    if img is None:
        return []
    img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    img = img.reshape((img.shape[0] * img.shape[1], 3))
    
    clt = KMeans(n_clusters=k)
    clt.fit(img)
    
    def palette(kmeans):
        n_pixels = len(kmeans.labels_)
        counter = Counter(kmeans.labels_)
        perc = {}
        for i in counter:
            perc[i] = np.round(counter[i]/n_pixels, 2)
        return perc

    perc = palette(clt)
    colors = []
    ordered_indices = sorted(perc, key=perc.get, reverse=True)
    
    for i in ordered_indices:
        color = clt.cluster_centers_[i]
        hex_color = "#{:02x}{:02x}{:02x}".format(int(color[0]), int(color[1]), int(color[2]))
        colors.append({"hex": hex_color, "percentage": perc[i]})
        
    return colors

colors = get_dominant_colors('logo.png')
print(json.dumps(colors, indent=2))
