import os

def generate_index_html():
    # Path to the directory containing project folders and index.html
    directory = os.path.dirname(os.path.abspath(__file__))

    # List of folders to ignore
    ignore_folders = {'.git', '.vscode'}

    # Get a list of all folders in the directory, excluding the ignored ones
    folders = [f for f in os.listdir(directory) 
               if os.path.isdir(os.path.join(directory, f)) and f not in ignore_folders]

    # Start creating the HTML content
    html_content = "<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><title>Project List</title> <link rel='stylesheet' href='style.css' /></head><body>\n"
    html_content += "<h1>Project List</h1>\n"
    html_content += "<ul class='list-container'>\n"

    # Add each folder as a link
    for folder in folders:
        html_content += f'<li><a href="{folder}/index.html">{folder}</a></li>\n'

    html_content += "</ul>\n"
    html_content += "</body></html>"

    # Write the HTML content to the index.html file
    with open(os.path.join(directory, "index.html"), "w") as f:
        f.write(html_content)

    print("index.html has been generated successfully!")

if __name__ == "__main__":
    generate_index_html()
