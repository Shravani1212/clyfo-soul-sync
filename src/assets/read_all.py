import os, zipfile, sys
import xml.etree.ElementTree as ET

assets_dir = r"C:\Users\Kasthuri Shravani\Documents\clyfo-soul-sync\src\assets"
import io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

for f in os.listdir(assets_dir):
    if f.endswith('.docx'):
        print(f"\n--- {f} ---")
        try:
            doc = zipfile.ZipFile(os.path.join(assets_dir, f))
            xml_content = doc.read('word/document.xml')
            tree = ET.fromstring(xml_content)
            ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
            texts = []
            for p in tree.findall('.//w:p', ns):
                paragraph_text = "".join([t.text for t in p.findall('.//w:t', ns) if t.text])
                if paragraph_text:
                    texts.append(paragraph_text)
            print("\n".join(texts[:50]))
        except Exception as e:
            print(f"Error: {e}")
