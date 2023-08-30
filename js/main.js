var contact = document.querySelector('.contact');
contact.addEventListener('click', function(event) {
    event.preventDefault();
    new WinBox({
        title: "Contact Me",
        background: "#424343",
        color: "#08FF83",
        border: 2,
        top: 50,
        right: 50,
        bottom: 0,
        left: 50,
        html:"<span id='name'>talel@manai</span>:<span id='path'>~/contact</span>$ ls -l<br><div class='contacts'> Email: <a class='contact' href='mailto:manaitalel@insat.u-carthage.tn'>Email Me</a><br>Phone: <a class='contact' href='tel:+216 94625555'>+216 94 625 555</a><br>LinkedIn: <a class='contact' href='https://www.linkedin.com/in/talel-manai/' target='_blank'>my LinkedIn</a><br>Facebook: <a class='contact' href='https://www.facebook.com/tal3l.manai' target='_blank'>my Facebook</a><br></div>"
    });
});
const textElement = document.getElementById('command');
const text2=document.getElementById('cont');
const cursor=document.getElementById('cursor');
const textToType = textElement.textContent;
textElement.textContent = '';

let index = 0;
text2.style.display='none';
function typeText() {
  if (index < textToType.length) {
    textElement.textContent += textToType.charAt(index);
    index++;
    if(index<textToType.length){
        setTimeout(typeText, 120);
    }
    else{
        setTimeout(typeText, 1000);
    }
  }else{
    text2.style.display='block';
    cursor.style.display='none';
  }
}
window.addEventListener('load', typeText);
const dash=document.getElementById('dash');
const width=window.innerWidth;
const times = Math.floor(width / 10);
for(let i=0;i<times;i++){
    dash.innerHTML+='-';
}