class Nav {
   constructor() {
      this.init()
      // This class constructs a navigation bar at the top of the page. It looks like this:
      //
      //  | previous button |  [    Folder name     ]  | next button |   | bookmarkButton | | downloadButton |
      //  |                 |  [Image# of ImageCount]  |             |   |                | |                |
      //
      // The left and right arrows are clickable and will navigate to the previous or next image in the folder.
      // - If the current image is the first image in the folder, the left arrow takes you to the last image in the previous folder.
      // - If the current image is the last image in the folder, the right arrow takes you to the first image in the next folder.
      // - If the current folder is the Bookmarks folder (folderId 0):
      //   - The left arrow takes you to the last image in the bookmarks.
      //   - The right arrow takes you to the first image in the bookmarks.
      // The folder name just shows the current folder name.
      // The image number and count show the current image number and the total number of images in the folder.
      // The bookmark button is clickable and will bookmark/unbookmark the current image.
   }

   init() {
      this.navDiv = document.getElementById("nav")
      this.navDiv.innerHTML = ''
      if (state.selectedFolder === -1) return
      if (state.selectedFolder === null) return
      this.navDiv.appendChild(document.createElement('div'))
      let main = document.createElement('div')
      main.classList.add('nav-main')
      main.appendChild(this.prevBtn)
      main.appendChild(this.infoContainer)
      main.appendChild(this.nextBtn)
      this.navDiv.appendChild(main)
      this.navDiv.appendChild(document.createElement('div'))
      this.navDiv.appendChild(this.bookmarkButton)
      this.navDiv.appendChild(this.downloadButton)
      this.navDiv.appendChild(this.shareButton)
   }

   refresh() {
      if (nav) nav = new Nav() 
      this.init()
      menu.refresh()
   }

   get prevBtn() {
      let btn = document.createElement('div')
      btn.classList.add('nav-prev')
      btn.title = 'Previous Image'
      btn.addEventListener('click', () => {
         this.advanceToPreviousImage()
      })
      return btn
   }

   advanceToPreviousImage() {
      let folderId = state.selectedFolder
      let imageId = state.selectedImage
      if (state.isViewingBookmarks){
         if (state.bookmarksCount < 2) return
         if (state.currentImageBookmarkIndex === 1) {
            let lastFolder = state.bookmarks[state.bookmarks.length - 1]
            folderId = lastFolder.folder
            imageId = lastFolder.images[lastFolder.images.length - 1]
         } else {
            let folder = state.bookmarks.find(b => b.folder === state.selectedFolder)
            let folderIndex = state.bookmarks.indexOf(folder)
            let imageIndex = folder.images.indexOf(state.selectedImage)
            if (imageIndex === 0) {
               let lastFolder = state.bookmarks[folderIndex - 1]
               folderId = lastFolder.folder
               imageId = lastFolder.images[lastFolder.images.length - 1]
            } else {
               imageId = folder.images[imageIndex - 1]
            }
         }
      } else {
         let folder = folders.find(f => f.id === state.selectedFolder)
         if (state.selectedImage === 1) {
            let folderIndex = folders.indexOf(folder)
            if (folderIndex === 0) {
               let lastFolder = folders[folders.length - 1]
               folderId = lastFolder.id
               imageId = lastFolder.count
            } else {
               let lastFolder = folders[folderIndex - 1]
               folderId = lastFolder.id
               imageId = lastFolder.count
            }
         } else {
            imageId = state.selectedImage - 1
         }
      }
      content.route(folderId, imageId)
   }

   get nextBtn() {
      let btn = document.createElement('div')
      btn.classList.add('nav-next')
      btn.title = 'Next Image'
      btn.addEventListener('click', () => {
         this.advanceToNextImage()
      })
      return btn
   }

   advanceToNextImage() {
      let folderId = state.selectedFolder
      let imageId = state.selectedImage
      if (state.isViewingBookmarks){
         if (state.bookmarksCount < 2) return
         if (state.currentImageBookmarkIndex === state.bookmarksCount) {
            let firstFolder = state.bookmarks[0]
            folderId = firstFolder.folder
            imageId = firstFolder.images[0]
         } else {
            let folder = state.bookmarks.find(b => b.folder === state.selectedFolder)
            let folderIndex = state.bookmarks.indexOf(folder)
            let imageIndex = folder.images.indexOf(state.selectedImage)
            if (imageIndex === folder.images.length - 1) {
               let nextFolder = state.bookmarks[folderIndex + 1]
               folderId = nextFolder.folder
               imageId = nextFolder.images[0]
            } else {
               imageId = folder.images[imageIndex + 1]
            }
         }
      } else {
         let folder = folders.find(f => f.id === state.selectedFolder)
         if (state.selectedImage === folder.count) {
            let folderIndex = folders.indexOf(folder)
            if (folderIndex === folders.length - 1) {
               let firstFolder = folders[0]
               folderId = firstFolder.id
               imageId = 1
            } else {
               let nextFolder = folders[folderIndex + 1]
               folderId = nextFolder.id
               imageId = 1
            }
         } else {
            imageId = state.selectedImage + 1
         }
      }
      content.route(folderId, imageId)
   }

   get infoContainer() {
      let container = document.createElement('div')
      container.classList.add('nav-info')
      container.appendChild(this.folderName)
      container.appendChild(this.viewingXofCount)
      return container
   }

   get folderName() {
      let name = document.createElement('div')
      if (state.selectedFolder === null) {
         name.innerText = 'Select an image to begin.'
      } else if (state.isViewingBookmarks) {
         name.innerText = 'Bookmarks'
      } else {
         let folder = folders.find(f => f.id === state.selectedFolder)
         name.innerText = folder.title
      }
      name.classList.add('nav-folder-name')
      return name
   }

   get viewingXofCount() {
      let xof = document.createElement('div')
      if (state.isViewingBookmarks) {
         xof.innerText = 'Viewing ' + state.currentImageBookmarkIndex + ' of ' + state.bookmarksCount
      } else {
         let folder = folders.find(f => f.id === state.selectedFolder)
         if (!folder) return xof
         xof.innerText = 'Viewing ' + state.selectedImage + ' of ' + folder.count
      }
      return xof
   }

   get bookmarkButton() {
      let ele = document.getElementById('bookmark-button')
      if (ele){
         ele.removeEventListener('click')
         ele.remove()
      }
      
      let bookmark = document.createElement('div')
      bookmark.id = 'bookmark-button'
      bookmark.classList.add('nav-bookmark')
      bookmark.appendChild(this.bookmarkIcon)
      bookmark.appendChild(this.bookmarkText)
      bookmark.addEventListener('click', () => {
         this.toggleBookmark()
         this.refresh()
      })
      
      return bookmark
   }

   get bookmarkIcon() {
      let icon = document.createElement('span')
      if (state.getIsBookmarked(state.selectedFolder, state.selectedImage)) {
         icon.classList.add('bookmark-icon-solid')
         icon.title = 'Remove From Bookmarked Images'
      } else {
         icon.classList.add('bookmark-icon-empty')
         icon.title = 'Add To Bookmarked Images'
      }
      return icon
   }

   get bookmarkText() {
      let text = document.createElement('span')
      text.classList.add('nav-bookmark-text')
      if (state.getIsBookmarked(state.selectedFolder, state.selectedImage)) {
         text.innerText = 'Remove Bookmark'
      } else {
         text.innerText = 'Add Bookmark'
      }
      return text
   }

   toggleBookmark() {
      if (state.getIsBookmarked(state.selectedFolder, state.selectedImage)) {
         state.removeBookmark(state.selectedFolder, state.selectedImage)
      } else {
         state.addBookmark(state.selectedFolder, state.selectedImage)
      }
      this.refresh()
   }

   get downloadButton() {
      let ele = document.getElementById('download-button')
      if (ele){
         ele.removeEventListener('click')
         ele.remove()
      }

      let download = document.createElement('div')
      download.id = 'download-button'
      download.title = 'Download Image'
      download.classList.add('download-icon')
      download.addEventListener('click', () => {
         this.downloadImage()
      })
      return download
   }

   downloadImage() {
      let folder = folders.find(f => f.id === state.selectedFolder);
      let path = GetImagePath(folder, state.selectedImage);
      let filename = folder.id.toString().padStart(2, '0') + '_' + state.selectedImage.toString().padStart(3, '0') + '.JPG';
      fetch(path)
         .then(response => response.blob())
         .then(blob => {
               let link = document.createElement('a');
               link.href = URL.createObjectURL(blob);
               link.download = filename;
               document.body.appendChild(link); // Append the link to the document body
               link.click(); // Programmatically click the link to trigger the download
               document.body.removeChild(link); // Remove the link from the document body
               URL.revokeObjectURL(link.href); // Clean up the URL object
         })
         .catch(console.error);
   }

   get shareButton() {
      let ele = document.getElementById('link-button')
      if (ele){
         ele.removeEventListener('click')
         ele.remove()
      }

      let share = document.createElement('div')
      share.id = 'link-button'
      share.title = 'Copy Image URL to Clipboard'
      share.classList.add('link-icon')
      share.addEventListener('click', () => {
         this.shareImage()
      })
      return share
   }

   /**
    * this copies the current image url to the clipboard
    */
   shareImage() {
      navigator.clipboard.writeText(window.location.href)
         .then(() => {
            console.log('Image URL copied to clipboard');
            console.log(window.location.href);
         })
         .catch(console.error);
   }
}