import os

def validate_file_extension(name):
    isValid = True
    ext = os.path.splitext(name)[1]
    valid_extenions = ['.jpg']

    if not ext.lower() in valid_extenions:
        isValid = False
    return isValid