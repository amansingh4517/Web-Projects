function page1() {
    let btn1 = document.querySelector('#btn1');
    let p1 = document.querySelector("p");

    btn1.addEventListener("click", function () {
        p1.textContent = "Hi, I am para and i have been changed"
    });
};
page1();

let page2 = function () {
    let btn2 = document.querySelector('#btn2');
    let img1 = document.querySelector("#img1");
    let img2 = document.querySelector("#img2");

    btn2.addEventListener("click", function () {
        // img1.src = "https://plus.unsplash.com/premium_photo-1740013836898-d550e5a5df89?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
        // img2.src = "https://images.unsplash.com/photo-1739980873302-b93d3bd4991e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"

        let src1 = img1.src;
        let src2 = img2.src;

        img1.src = src2;
        img2.src = src1;
    });
};
page2();


let page3 = function () {
    let inpt = document.querySelectorAll(".q3-input");
    let btn3 = document.querySelector(".btn3");
    let q3Form = document.querySelector("#q3-form");
    let h4 = document.querySelector("#q3-form h3");

    
    q3Form.addEventListener("submit", function (event) {
        event.preventDefault(); //stop page from reloading when click on submit button
        
        let success = true;

        inpt.forEach(function (item) {  //inpt is array that contain inputted data and (item) work as i (like in for loop to hold current element)
            if (item.value.trim() === "") {  //trim helps to eliminate starting and ending spaces 
                success = false;
            }
        });
        console.log(inpt.values);

        if (success == true) {
            h4.textContent = "Form summited successfully"
            h4.style.color = "Green"
            h4.style.fontSize = "1.5vw"
        }
        else {
            alert("please enter the detail");
        }
    });
};
page3();

let page4 = function () {
    let inpt4 = document.querySelector("#inpt_4");
    let add = document.querySelector("#add");
    let ul = document.querySelector(".q4-card ul");
    let remove = document.querySelector("#remove")

    add.addEventListener("click", function (event) {
        let li_4 = document.createElement('li');
        if (inpt4.value.trim() != "") {
            li_4.textContent = inpt4.value;
            ul.appendChild(li_4);
            inpt4.value = "";
        }

    });
    remove.addEventListener("click", function (event) {
        //.lastChild is property that access last element of a tag
        if(ul.lastChild){
            ul.removeChild(ul.lastChild);
        }
    });
}
page4();

let page5 = function () {
    let start = document.querySelector("#btn5_start");
    let stop = document.querySelector("#btn5_stop");
    let h1 = document.querySelector("#Q5  h1")
    let count = 0;
    let start_count;  //we have to declare the variable outside the start event listener because when we want to stop the count we have to put to clearInterval which is in inside a another funtion 

    start.addEventListener("click", function (event) {
        start.disabled = true;
        start_count = setInterval(function () {
            h1.textContent = count;
            count++;
        }, 500);
    })
    stop.addEventListener("click", function (event) {
        clearInterval(start_count);
        start.disabled = false;
    });
}
page5();

let page6 = function () {
    let navItems = document.querySelectorAll("#q6-nav h3"); // Get all h3 inside #q6-nav
    let cdHome = document.querySelector("#q6-home");
    let cdAbout = document.querySelector("#q6-about");
    let cdContact = document.querySelector("#q6-contact");

    let hide = function () {
        document.querySelectorAll("#q6-content > *").forEach(function (item) {
            item.style.display = "none";
        });
    };

    // Initially show home and hide others
    hide();
    cdHome.style.display = "block";

    navItems[0].addEventListener("click", function () {
        hide();
        cdHome.style.display = "block";
    });

    navItems[1].addEventListener("click", function () {
        hide();
        cdAbout.style.display = "block";
    });

    navItems[2].addEventListener("click", function () {
        hide();
        cdContact.style.display = "block";
    });
};
page6();

let page7 = function () {
    let progress = document.querySelector('#progress');
    let download = document.querySelector(".d-btn")

    download.addEventListener("click", function () {
        download.disabled = true;
        let count = 0;
        let d = setInterval(function () {
            count++
            progress.style.width = count + "%";
            if (count == 100) {
                clearInterval(d);
                download.disabled = false;
            };
        }, 50);
    });

}
page7();

let page8 = function () {
    let input = document.querySelector("#Q8 input")

    let data = [
        { name: "Allen Grey", src: "https://randomuser.me/api/portraits/men/1.jpg" },
        { name: "Ava Miller", src: "https://randomuser.me/api/portraits/women/1.jpg" },
        { name: "Alexander Garcia", src: "https://randomuser.me/api/portraits/men/2.jpg" },
        { name: "Amelia Thompson", src: "https://randomuser.me/api/portraits/women/2.jpg" },
        { name: "Adam Scott", src: "https://randomuser.me/api/portraits/men/3.jpg" },

        { name: "Emma Smith", src: "https://randomuser.me/api/portraits/women/3.jpg" },
        { name: "Evelyn Martinez", src: "https://randomuser.me/api/portraits/women/4.jpg" },
        { name: "Ethan Brooks", src: "https://randomuser.me/api/portraits/men/4.jpg" },
        { name: "Emily Watson", src: "https://randomuser.me/api/portraits/women/5.jpg" },
        { name: "Elijah Cooper", src: "https://randomuser.me/api/portraits/men/5.jpg" },

        { name: "Liam Johnson", src: "https://randomuser.me/api/portraits/men/6.jpg" },
        { name: "Lucas White", src: "https://randomuser.me/api/portraits/men/7.jpg" },
        { name: "Leo Bennett", src: "https://randomuser.me/api/portraits/men/8.jpg" },
        { name: "Lily Adams", src: "https://randomuser.me/api/portraits/women/6.jpg" },
        { name: "Logan Foster", src: "https://randomuser.me/api/portraits/men/9.jpg" },

        { name: "Noah Davis", src: "https://randomuser.me/api/portraits/men/10.jpg" },
        { name: "Nathan Reed", src: "https://randomuser.me/api/portraits/men/11.jpg" },
        { name: "Nora Hayes", src: "https://randomuser.me/api/portraits/women/7.jpg" },
        { name: "Natalie Carter", src: "https://randomuser.me/api/portraits/women/8.jpg" },
        { name: "Nicholas Price", src: "https://randomuser.me/api/portraits/men/12.jpg" }
    ];

    function showData(arr) {
        let person = "";
        arr.forEach(function (item) {
            person += `<span>
            <div class="img"><img src=${item.src} alt=""></div>
            <h3>${item.name}</h3>
        </span>`;
        });
        document.querySelector("#person").innerHTML = person;
    }

    showData(data);

    let matching;
    input.addEventListener("input", function (event) {
        matching = data.filter(function (e) {
            return e.name.toLowerCase().startsWith(input.value.toLowerCase());
        });
        showData(matching);
    });
}
page8();

let page9 = function () {
    let counter = document.querySelector("#counter");
    let textarea = document.querySelector("#Q9 textarea");
    textarea.addEventListener("input", function (e) {
        counter.textContent = textarea.value.length;
    });
}
page9();

let page10 = function () {
    window.addEventListener("scroll", function () {
        let scrolled = document.documentElement.scrollTop;
        let screenHeight = window.innerHeight;
        let webPageHeight = document.documentElement.scrollHeight;
        let percentageScrolled = (scrolled / (webPageHeight - screenHeight)) * 100;

        let progess = document.querySelector("#Q10 #inside");

        progess.style.height = percentageScrolled + "%";


    });


}
page10();







