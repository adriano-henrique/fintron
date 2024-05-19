import requests
import PyPDF2
import base64
import os

file_url = "https://utfs.io/f/d0beba9d-7ab4-4478-888a-391ae778c39f-ltqg3v.pdf"
encoded_url = base64.b64encode(file_url.encode())
encoded_file_string = encoded_url.decode()
file = requests.get(file_url)
if "tmp" not in os.listdir():
    os.mkdir("tmp")

file_path = os.path.join("tmp", encoded_file_string + ".pdf")
 #Save file on a temporary location
with open(file_path, "wb") as f:
    f.write(file.content)

reader = PyPDF2.PdfReader(file_path)
page = reader.pages[0]
text = page.extract_text()
print(text)