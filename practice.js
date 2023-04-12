class Programireba{
    constructor(name,industry){
        this.name = name;
        this.industry= industry;
    }
}



var pl1 = new Programireba("C#", "BACK")

console.log(pl1);

class Playlist{
    constructor(band,name,genre){
        this.name = name
        this.band = band
        this.genre = genre
}
}

var pirveli = Playlist('BADFORD FALLS','LOUDSPEAKERS','POP')



function f() {
    let i = 0;
    while (true) {
      button.textContent = ++i;
    }
  }

function f1(){
    let i = 0
    while (false){
        button.textContent = --i;
    }
}


class kerdzebi{
    constructor(name,form,from){
        this.name = name
        this.form = form
        this.from = from
}
}

var kerdzebi = kerdzebi('kachapuri', 'khinkali',)

var children = document.getElementById("kerdzebi").children;
for (var i = 0; i < children.length; ++i) {
    alert(children[i].className);
}


class xalxi{
    constructor(name,lastname,cityzenship,age){
        this.name
        this.lastname
        this.cityzenship
        this.age
    }

}