

let input = document.getElementById("textBox")
let progression  = document.getElementById("song")


// let intro = []
// let verse = []
// let chorus = []
// let bridge = []
// let outro = []




let totalSong = []







function addToSelected(whatSongSection) {
  

    let chord = input.value

    if(chord == "") {
        return
    }
    whatSongSection.push(chord)
    input.value = ""

    console.log("hello")
    console.log(whatSongSection)

    progression.innerText = `${totalSong}`


  
}






function HandleClick() {
    console.log(inputRef.current.value);
  }



  function clearAll() {
    window.location.reload()
  }

  function undo() {

    totalSong.pop()
    progression.innerText = `${totalSong}`

  }
