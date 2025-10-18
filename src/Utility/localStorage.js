import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
// get data 

export const loadInstallApp = () => {
    try {
        const data = localStorage.getItem('installList')
        return data ? JSON.parse(data) : []
    }
    catch (err) {
        console.log(err);
        return []
    }
}


// save data 

export const updateList = (app) => {
    const installList = loadInstallApp();
    try {
        const isRepeat = installList.some(p => p.id === app.id);
        const updateInstallList = [...installList, app]
        if (isRepeat) {
            return alert('This App Already Install');
        }
        localStorage.setItem('installList', JSON.stringify(updateInstallList))
    }
    catch (err) {
        console.log(err)
    }
    return Toastify({
        text: "App Install Successfully!",
        duration: 2000,
        gravity: "top",
        position: "center",
        backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
    }).showToast();

}

// delete  data 

export const handleRemoveUnInstall = (id) => {
    const unInstallList = loadInstallApp();
    try {
        const updateInstallList = unInstallList.filter(p => p.id !== id);
        console.log(unInstallList)
        localStorage.setItem('installList', JSON.stringify(updateInstallList))
    }
    catch (err) {
        console.log(err)
    }
}


