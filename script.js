
let pag = () => {
    content = document.getElementById('current');
    father = content.parentNode;
    father.removeChild(content)
    addN()
}

let add = () => {

    let current = `
    <div id="current">
    <div class="result">
        <img  src="miles.png" alt="Logo1">
        <div class="content">
            <h1>Spider-man (Miles Morales)</h1>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                 sunt in culpa qui officia deserunt mollit anim id 
                 est laborum.</h2>
            <p><b># Comics:</b> 324 
                &nbsp;&nbsp;<b># Series:</b> 93  
                &nbsp;&nbsp;<b>#Stories:</b> 336</p>
        </div>
    </div>

    <div class="result">
        <img  src="peter.png" alt="Logo1">
        <div class="content">
            <h1>Spider-man (Peter Parker)</h1>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                 sunt in culpa qui officia deserunt mollit anim id 
                 est laborum.</h2>
            <p><b># Comics:</b> 324 
                &nbsp;&nbsp;<b># Series:</b> 93  
                &nbsp;&nbsp;<b>#Stories:</b> 336</p>
        </div>
    </div>

    <div class="result">
        <img  src="miguel.png" alt="Logo1">
        <div class="content">
            <h1>Spider-man (Miguel O'Hara)</h1>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                 sunt in culpa qui officia deserunt mollit anim id 
                 est laborum.</h2>
            <p><b># Comics:</b> 324 
                &nbsp;&nbsp;<b># Series:</b> 93  
                &nbsp;&nbsp;<b>#Stories:</b> 336</p>
        </div>
    </div>

    <div class="result">
        <img  src="ulti.png" alt="Logo1">
        <div class="content">
            <h1>Spider-man (Ultimate)</h1>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                 sunt in culpa qui officia deserunt mollit anim id 
                 est laborum.</h2>
            <p><b># Comics:</b> 324 
                &nbsp;&nbsp;<b># Series:</b> 93  
                &nbsp;&nbsp;<b>#Stories:</b> 336</p>
        </div>
    </div>
 </div>`;

    btnPag  = `<button id="pag" onclick="pag()">Siguiente pagina</button>`

    document.getElementById('nuevo').innerHTML = current;
    document.getElementById('footer').innerHTML = btnPag;
    
}

let addN = () => {

    let abc = `
    <div id="newcurrent">
    <div class="result">
        <img  src="w.png" alt="Logo1">
        <div class="content">
            <h1>Spider-Woman (Jessica Drew)</h1>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                 sunt in culpa qui officia deserunt mollit anim id 
                 est laborum.</h2>
            <p><b># Comics:</b> 40 
                &nbsp;&nbsp;<b># Series:</b> 70  
                &nbsp;&nbsp;<b>#Stories:</b> 120</p>
        </div>
    </div>

    <div class="result">
        <img  src="gwen.png" alt="Logo1">
        <div class="content">
            <h1>Spider-Ghost (Gwen Stacy)</h1>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                 sunt in culpa qui officia deserunt mollit anim id 
                 est laborum.</h2>
            <p><b># Comics:</b> 45 
                &nbsp;&nbsp;<b># Series:</b> 3  
                &nbsp;&nbsp;<b>#Stories:</b> 36</p>
        </div>
    </div>

    <div class="result">
        <img  src="mattie.png" alt="Logo1">
        <div class="content">
            <h1>Spider-woman (Martha Mattie Franklin)</h1>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                 sunt in culpa qui officia deserunt mollit anim id 
                 est laborum.</h2>
            <p><b># Comics:</b> 231 
                &nbsp;&nbsp;<b># Series:</b> 80
                &nbsp;&nbsp;<b>#Stories:</b> 16</p>
        </div>
    </div>

    <div class="result">
        <img  src="ultiw.png" alt="Logo1">
        <div class="content">
            <h1>Spider-Woman (Ultimate)</h1>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                 sunt in culpa qui officia deserunt mollit anim id 
                 est laborum.</h2>
            <p><b># Comics:</b> 459 
                &nbsp;&nbsp;<b># Series:</b> 102  
                &nbsp;&nbsp;<b>#Stories:</b> 78</p>
        </div>
    </div>
</div>
    `;

    document.getElementById('nuevo').innerHTML = abc;

}