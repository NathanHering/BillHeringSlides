class Menu {
    constructor(){
        this.left = -560
        this.menuDiv = document.getElementById("menu")
        this.menuDiv.addEventListener('scroll', () => {
            state.setScrollPosition(this.menuDiv.scrollTop)
        })
        
        this.menuButtonDiv = document.getElementById("menubutton")
        this.menuButtonDiv.addEventListener('click',() => {
            this.toggleMenu()
        })
        this.refresh()
    }

    refresh(){
        this.buildMenu()
        
        if (state.expandedFolder > -1){
            this.renderThumbs(state.expandedFolder)
            this.menuDiv.scrollTo({ top: state.scrollPosition, behavior: 'instant'})
        } else {
            this.menuDiv.scrollTo({ top: 0, behavior: 'instant'})
        }
    }

    buildMenu(){
        // in case this is a refresh based on a change of selection in the menu, we need to clear the menu and rebuild it.
        let list = document.querySelector('.menu-list')
        if (list) list.remove()

        // now its time to build the menu
        list = document.createElement('div')
        list.classList.add('menu-list')

        list.appendChild(this.bookmarksElement)

        folders.forEach((folder) => {
            let menuFolder = document.createElement('div')
            menuFolder.classList.add('menu-item')

            let menuFolderHeader = document.createElement('div')
            menuFolderHeader.classList.add('menu-item-header')

            let titleSpan = document.createElement('span')
            titleSpan.innerText = folder.title
            menuFolderHeader.appendChild(titleSpan)

            let countSpan = document.createElement('span')
            countSpan.innerText = ` ${folder.count}`
            countSpan.classList.add('count')
            menuFolderHeader.appendChild(countSpan)

            menuFolder.appendChild(menuFolderHeader)
            menuFolderHeader.addEventListener('click', () => {
                this.accordionSelect(folder.id)
                this.renderThumbs(folder.id)
            })

            let thumbsDiv = document.createElement('div')
            if (state.expandedFolder != folder.id) thumbsDiv.classList.add('hide')
            thumbsDiv.classList.add('thumbs')
            thumbsDiv.id = folder.id
            menuFolder.appendChild(thumbsDiv)
            
            list.appendChild(menuFolder)
        })

        this.menuDiv.appendChild(list)
    }

    get bookmarksElement(){
        let menuFolder = document.createElement('div')
        menuFolder.classList.add('menu-item')

        let menuFolderHeader = document.createElement('div')
        menuFolderHeader.classList.add('menu-item-header')

        let iconSpan = document.createElement('span')
        iconSpan.classList.add('bookmark-icon-empty')
        menuFolderHeader.appendChild(iconSpan)

        let titleSpan = document.createElement('span')
        titleSpan.innerText = 'Bookmarks'
        menuFolderHeader.appendChild(titleSpan)

        let countSpan = document.createElement('span')
        let count = state.bookmarksCount
        countSpan.innerText = ` ${count}`
        countSpan.classList.add('count')
        menuFolderHeader.appendChild(countSpan)

        menuFolder.appendChild(menuFolderHeader)
        menuFolderHeader.addEventListener('click', () => {
            this.accordionSelect(0)
            this.renderThumbs(0)
        })

        let thumbsDiv = document.createElement('div')
        if (state.selectedFolder !== 0) thumbsDiv.classList.add('hide')
        thumbsDiv.classList.add('thumbs')
        thumbsDiv.id = 0
        menuFolder.appendChild(thumbsDiv)
        
        return menuFolder
    }

    accordionSelect(id)
    {
        let items = document.querySelectorAll('.thumbs')
        items.forEach((y) => {
            if(y.id == id) 
            {
                if (y.classList.contains('hide'))
                {
                    y.classList.remove('hide')
                    let pos = (id * 45) + 15 - id
                    state.setScrollPosition(pos)
                    state.setExpandedFolder(id)
                    setTimeout(() => {
                        this.menuDiv.scrollTo({
                            top: pos,
                            behavior: 'smooth'})
                            ,100}) // the delay is needed to allow for the menu to expand before scrolling
                } else {
                    y.classList.add('hide')
                    state.setScrollPosition(0)
                    state.setExpandedFolder(-1)
                    this.menuDiv.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    })
                }
            } else {
                if(!y.classList.contains('hide')) y.classList.add('hide')
            }
        })
        state.syncLocalStorage(true)
    }

    renderThumbs(folderId){
        let thumbsDiv = document.getElementById(folderId)
        if (!thumbsDiv) return
        thumbsDiv.classList.add('thumbs')
        thumbsDiv.innerHTML = ''
        if (folderId == 0){
            this.renderBookmarkThumbs(thumbsDiv)
            return
        }
        let folder = folders.find((f) => f.id == folderId)
        for (let i = 1; i <= folder.count; i++)
        {
            let imagePath = GetImagePath(folder, i, 'sm')
            let thumb = this.createThumbnail(imagePath, folder.id, i)
            thumbsDiv.appendChild(thumb)
        }
    }

    renderBookmarkThumbs(thumbsDiv){
        let count = state.bookmarksCount
        if (count == 0) {
            thumbsDiv.innerText = 'You have no bookmarked images.'
            thumbsDiv.classList.add('no-bookmarks')
            if (thumbsDiv.classList.contains('hide')) thumbsDiv.classList.remove('hide')
        }
        state.bookmarks.forEach((item) => {
            let folder = folders.find((f) => f.id == item.folder)
            item.images.forEach((i) => {
                let imagePath = GetImagePath(folder, i, 'sm')
                let thumb = this.createThumbnail(imagePath, item.folder, i, true)
                thumbsDiv.appendChild(thumb)
            })
        })
    }

    createThumbnail(imagePath, folderId, imageId, isBookmark = false){
        // Create the container element
        let thumbContainer = document.createElement('div');
        thumbContainer.classList.add('thumb-container');

        // Create the image element
        let thumbImage = document.createElement('img');
        thumbImage.src = imagePath;
        thumbImage.dataset.folderId = folderId;
        thumbImage.dataset.imageId = imageId;
        thumbImage.classList.add('thumb-image');

        thumbContainer.addEventListener('click',() => {
            this.handleThumbClick(folderId, imageId, isBookmark)
        })
        // Append the image to the container
        thumbContainer.appendChild(thumbImage);

        return thumbContainer;
    }

    toggleMenu(){
        let x = this.left < 0 ? 0 : -560
        this.menuDiv.scrollTo({
            top: state.scrollPosition,
            behavior: 'instant'
        })
        this.menuDiv.style.left = x
        this.left = x
    }

    handleThumbClick(folderId, imageId, isBookmark = false){
        state.setViewingBookmarks(isBookmark)
        content.route(folderId, imageId)
    }
}
