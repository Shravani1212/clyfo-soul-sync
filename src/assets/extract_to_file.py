import os, zipfile, sys
import xml.etree.ElementTree as ET

assets_dir = r"C:\Users\Kasthuri Shravani\Documents\clyfo-soul-sync\src\assets"
out_file = os.path.join(assets_dir, "all_docs.txt")

with open(out_file, "w", encoding="utf-8") as f:
    for filename in os.listdir(assets_dir):
        if filename.endswith('.docx'):
            f.write(f"\n\n================================ {filename} ================================\n\n")
            try:
                doc = zipfile.ZipFile(os.path.join(assets_dir, filename))
                xml_content = doc.read('word/document.xml')
                tree = ET.fromstring(xml_content)
                ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
                texts = []
                for p in tree.findall('.//w:p', ns):
                    paragraph_text = "".join([t.text for t in p.findall('.//w:t', ns) if t.text])
                    if paragraph_text:
                        texts.append(paragraph_text)
                f.write("\n".join(texts))
            except Exception as e:
                f.write(f"Error: {e}\n")
