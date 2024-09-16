class State {
   constructor() {
      //#region properties
      this.isViewingBookmarks = false;
      this.selectedFolder = null;
      this.selectedImage = null;
      this.expandedFolder = -1;
      this.scrollPosition = 0;
      this.bookmarks = []; // E.G. [ { folder: 1, images: [ 1, 3, 7 ] } ]
      //#endregion
      this.syncLocalStorage();
   }

   setViewingBookmarks(viewing) {
      this.isViewingBookmarks = viewing;
      this.syncLocalStorage(true);
   }

   //#region selected folder & image
   setFolder(folderId) {
      this.selectedFolder = folderId;
      this.selectedImage = null;
      this.syncLocalStorage(true);
   }

   setImage(imageId) {
      this.selectedImage = imageId;
      this.syncLocalStorage(true);
   }

   setFolderAndImage(folderId, imageId) {
      this.selectedFolder = folderId;
      this.selectedImage = imageId;
      this.syncLocalStorage(true);
   }
   //#endregion

   setExpandedFolder(folderId) {
   this.expandedFolder = folderId;
   this.syncLocalStorage(true);
   }

   setScrollPosition(position) {
      this.scrollPosition = position;
      this.syncLocalStorage(true);
   }

   //#region bookmarks
   addBookmark(folderId, imageId) {
      let found = this.bookmarks.find(b => b.folder === folderId);
      if (!found) {
         this.bookmarks.push({ folder: folderId, images: [imageId] });
      } else {
         if (!found.images.includes(imageId)) {
            found.images.push(imageId);
         }
      }
      this.sortBookmarks();
      this.syncLocalStorage(true);
   }

   removeBookmark(folderId, imageId) {
      let foundFolder = this.bookmarks.find(b => b.folder === folderId);
      console.log(arguments)
      if (foundFolder) {
         let foundImageIndex = foundFolder.images.indexOf(imageId);
         if (foundImageIndex > -1) {
               foundFolder.images.splice(foundImageIndex, 1);
               if (foundFolder.images.length === 0) {
                  let index = this.bookmarks.indexOf(foundFolder);
                  this.bookmarks.splice(index, 1);
               }
         }
      }
      this.syncLocalStorage(true);
   }
   
   get bookmarksCount(){
      let i = 0
      for (let folder of this.bookmarks)
      {
         i += folder.images.length
      }
      return i
   }

   get currentImageBookmarkIndex(){
      let count = 0
      let keepGoing = true
      this.bookmarks.forEach((b) => {
         if (keepGoing){
            if (b.folder !== this.selectedFolder){
               count += b.images.length
            } else {
               count += b.images.indexOf(this.selectedImage) + 1
               keepGoing = false
            }
         }
      })
      return count
   }

   sortBookmarks(){
      this.bookmarks.sort((a, b) => a.folder - b.folder)
      this.bookmarks.forEach((b) => b.images.sort((a, b) => a - b))
   }

   getIsBookmarked(folderId, imageId){
      let found = this.bookmarks.find(b => b.folder === folderId)
      if (found){
         console.log(found.images.includes(imageId))
         return found.images.includes(imageId)
      }
      return false
   }
   //#endregion

   //#region localStorage
   syncLocalStorage(push = false) {
      if (push) {
         localStorage.setItem('WEH-Photos', JSON.stringify(this));
      } else {
         let stored = localStorage.getItem('WEH-Photos');
         if (!stored) {
               localStorage.setItem('WEH-Photos', JSON.stringify(this));
         } else {
               let state = JSON.parse(stored);
               this.isViewingBookmarks = state.isViewingBookmarks;
               this.selectedFolder = state.selectedFolder;
               this.selectedImage = state.selectedImage;
               this.expandedFolder = state.expandedFolder;
               this.scrollPosition = state.scrollPosition;
               this.bookmarks = state.bookmarks;
         }
      }
   }
   //#endregion
}
