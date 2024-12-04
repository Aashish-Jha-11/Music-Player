var arr = [
    { songName: "Sankat Mochan Hanuman", url: "Songs/Sankat Mochan Hanuman.mp3", img: "Thumbnails/Sankat-Mochan-Hanuman.jpg" },
    { songName: "Unstoppable", url: "Songs/Unstoppable.mp3", img: "Thumbnails/Unstoppable.jpg" },
    { songName: "Last Breath ", url: "Songs/Last Breath.mp3", img: "Thumbnails/Last_Breath.jpg" },
    { songName: "Make Some Noise For Desi Boyz ", url: "Songs/Make Some Noise For Desi Boyz.mp3", img: "Thumbnails/Desi-Boyz.jpg" }
]

  var clutter = ""

    arr.forEach(function (AJ, index) {
        clutter += `<div class="song-card" id=${index}>
    <div class="part1">
        <img src=${AJ.img} alt="">
        <h2>${AJ.songName}</h2>
    </div>
    <h6>4:24</h6>
</div>`
    })
