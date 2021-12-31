function cetakGambar(){
    const hewan = document.getElementById("animal");
    const gambar = document.getElementById("gambar");

    if(hewan.value === "cendrawasih"){
        gambar.src = "Asset/img/cendrawasih.jpg"
        alert("Yang akan di tampilan adalah gambar Burung Cendrawasih")
    }
    if(hewan.value === "kudalaut"){
        gambar.src = "Asset/img/kudalaut.jpg"
        alert("Yang akan di tampilan adalah gambar Kuda Laut")
    }
    if(hewan.value === "harimau"){
        gambar.src = "Asset/img/harimau.jpg"
        alert("Yang akan di tampilan adalah gambar Harimau")
    }
    if(hewan.value === "bluedragon"){
        gambar.src = "Asset/img/bluedragon.jpg"
        alert("Yang akan di tampilan adalah gambar Blue Dragon")
    }
    if(hewan.value === "merak"){
        gambar.src = "Asset/img/merak.jpg"
        alert("Yang akan di tampilan adalah gambar Burung Merak")
    }
    if(hewan.value === "nautilus"){
        gambar.src = "Asset/img/nautilus.jpg"
        alert("Yang akan di tampilan adalah gambar Nautilus")
    }
}