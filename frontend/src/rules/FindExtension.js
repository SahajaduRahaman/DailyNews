function getFileExtension(url) {
    const match = url.match(/\.([a-z0-9]+)(?:[#]|$)/i);
    return match ? match[1] : null;
}

function getFileTypeByExtension(extension) {
  const extensionMap = {
    jpg: 'image',
    jpeg: 'image',
    png: 'image',
    webp: 'image',
    gif: 'image',
    mp4: 'video',
    mov: 'video',
    avi: 'video'
  };
  const lowerCaseExtension = extension.toLowerCase();
  return extensionMap[lowerCaseExtension] || 'unknown';
}