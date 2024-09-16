/**
 * Get the path of an image based on the folder, image, and size.
 * @param {object} folder The folder object from folders.js.
 * @param {string} image The id of the image.
 * @param {string} size The size of the image. E.G. 'sm', 'md', '' empty string means full size, for download.
 */
function GetImagePath(folder, image, size = '') {
   // check to see if the url where this is hosted is file directory or on a github pages
   let isFile = window.location.protocol === 'file:'
   
   let folderNum = folder.id.toString().padStart(2, '0')
   let imgNum = image.toString().padStart(3, '0')
   let suffix = size === '' ? '' : '_' + size
   let root = isFile ? './images/' : './blob/main/images/'

   return root + folder.path + '/' + folderNum + '_' + imgNum + suffix + '.jpg'
}
