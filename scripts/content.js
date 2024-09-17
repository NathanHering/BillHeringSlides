class Content {
    constructor(defaultdata){
        this.homeFolder = defaultdata.folder
        this.homeImage = defaultdata.image
        this.div = document.getElementById("content")
    }

    route(fid = false, iid = false) {
        if (fid !== false && iid !== false){
            state.setFolderAndImage(fid, iid)
            window.location = `${window.location.pathname}?folder=${fid}&image=${iid}`
        }
        this.div.innerHTML = ''
        let f, i, args
        args = this.getUrlArgs()
        if (args.search && args.count === 2){
            console.log('a')
            f = args.folder
            i = args.image
        } else if (state.selectedFolder !== null && state.selectedImage !== null){
            console.log('b')
            f = state.selectedFolder
            i = state.selectedImage
        } else {
            console.log('c')
            f = this.homeFolder
            i = this.homeImage
        }
        let folder = folders.find((fl) => fl.id == f)
        let path = GetImagePath(folder, i, 'md')
        this.renderImage(path)
    }

    getUrlArgs(){
        let args = {
            search: false,
            count: 0,
            folder: null,
            image: null
        }
        const search = window.location.search.substring(1)
        if (search != ""){
            args.search = true
            search.split('&').forEach((n) => {
                let arg = n.split('=')
                if (arg[0] === 'folder'){
                    args.count++
                    args.folder = parseInt(arg[1])
                } else if (arg[0] === 'image'){
                    args.count++
                    args.image = parseInt(arg[1])
                }
            })
        }
        return args
    }

    renderImage(path){
        let contentContainer = document.createElement('div')
        contentContainer.classList.add('content-container')

        let img = document.createElement('img')
        img.classList.add('content-image')
        img.src = path

        contentContainer.appendChild(img)
        this.div.appendChild(contentContainer)
    }
}
