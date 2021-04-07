#!/usr/bin/env python3
"""
Parses the emoji-test.txt from Unicode.org
Link to Emoji 13.1 file https://unicode.org/Public/emoji/13.1/emoji-test.txt
This outputs a JSON that can be used.
"""
import re


__author__ = "Matthew Petela"
regex = r'^[^#]*[;]'
semi_regex = r'[^;]*'


def main():
    """ Main entry point of the app """
    filename = input("Enter filename: ")
    f = open(filename, "r")
    string = f.read()
    out_file = open("all-emojis.csv", "w")
    matches = re.finditer(regex, string, re.MULTILINE)
    for i in matches:
        removed_whitespace = re.sub(' +', ' ', i.group())
        cleaned = "&#x" + removed_whitespace[0:-2].replace(" ", "&#x") + ";"
        out_file.write(cleaned)
        out_file.write("\n")
        print(cleaned)





if __name__ == "__main__":
    """ This is executed when run from the command line """
    main()
