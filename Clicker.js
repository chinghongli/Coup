        //Part of index.html

        document.getElementById("lbutton").disabled = true

        var fcoin = 0;

        function forgeClick(number) {
            fcoin = fcoin + number;
            document.getElementById("fcoin").innerHTML = fcoin;
        }

        var presser = 0;

        function setupPresser() {
            if (fcoin >= 10) {
                fcoin = fcoin - 10;
                presser = presser + 1;
                moneypersecond += 0.5
                document.getElementById("presser").innerHTML = presser;
                document.getElementById("fcoin").innerHTML = fcoin
            };
        }

        var moneypersecond = 0

        function mps() {
            fcoin += moneypersecond;
            document.getElementById("fcoin").innerHTML = fcoin;
            document.getElementById("moneypersecond").innerHTML = moneypersecond;
        }

        window.setInterval(mps, 1000)

        function breakdown() {
            if (presser >= 1) {
                presser = presser - 1;
                moneypersecond = moneypersecond - 0.5;
                document.getElementById("presser").innerHTML = presser;
                document.getElementById("moneypersecond").innerHTML = moneypersecond
            };
        }

        window.setInterval(breakdown, 40000)

        // Above are FAKE coins
        // Below are REAL coins

        var rcoin = 0 // CHANGE!!!!!

        function launderClick() {
            if (fcoin >= 2) {
                rcoin = rcoin + 1;
                fcoin = fcoin - 2;
                document.getElementById("rcoin").innerHTML = rcoin;
                document.getElementById("fcoin").innerHTML = fcoin
            };
        }

        // Below are FRAUDULENT NETWORKING COMPONENTS
        // 0 is UNPURCHASED
        // 1 is PURCHASED

        var computer = 0

        function buyComputer() {
            if (rcoin >= 70) {
                document.getElementById("cbutton").disabled = true
            }
            if (rcoin >= 70) {
                computer = ++computer;
                rcoin = rcoin - 70;
                var computeravaliability = (computer == 1) ? "Computer Purchased" : "Please Purchase Computer";
                document.getElementById("computeravaliability").innerHTML = computeravaliability;
                document.getElementById("rcoin").innerHTML = rcoin;          
                organisation = ++organisation;

            };
        }

        var router = 0

        function buyRouter() {
            if (rcoin >= 40) {
                document.getElementById("rbutton").disabled = true
            }
            if (rcoin >= 40) {
                router = ++router;
                rcoin = rcoin - 40;
                var routeravaliability = (router == 1) ? "Router Installed" : "Please Purchase Router";
                document.getElementById("routeravaliability").innerHTML = routeravaliability;
                document.getElementById("rcoin").innerHTML = rcoin;       
                organisation = ++organisation;
            };
        }

        var server = 0
        var organisation = 0
        
        function buyServer() {
            if (rcoin >= 80) {
                document.getElementById("sbutton").disabled = true
            }
            if (rcoin >= 80) {
                server = ++server;
                rcoin = rcoin - 40;
                var serveravaliability = (server == 1) ? "Server Avaliable" : "Please Purchase A Server";
                document.getElementById("serveravaliability").innerHTML = serveravaliability;
                document.getElementById("rcoin").innerHTML = rcoin;     
                organisation = ++organisation;
            };
        }

        // Below is FRAUD AUTO INCOME

        var coinpersecond = 0

        function rps() {
            rcoin += coinpersecond;
            document.getElementById("rcoin").innerHTML = rcoin;
            document.getElementById("coinpersecond").innerHTML = coinpersecond
        }

        window.setInterval(rps, 1000)

        // Enabling the SCHEME
        
        function launch() {
            if (server === 1 && router === 1 && computer === 1) {
            document.getElementById("lbutton").disabled = false
            };
        }
        
        window.setInterval(launch,1)
        
        function enables() {
            coinpersecond = coinpersecond + 5;
            var hidelbutton = document.getElementById("replacelbutton");
                hidelbutton.style.display = "none";
            var showscheme = document.getElementById("fsl");
                showscheme.style.display = "block";
                showscheme.style.color = "crimson";
            var showupgrade = document.getElementById("showupgrades");
                showupgrade.style.display = "block";
            document.getElementById("coinpersecond").innerHTML = coinpersecond;
        }
                
        function upgradeComputer() {
        if (rcoin >= 150) {
            rcoin = rcoin - 150;
            coinpersecond = coinpersecond + 33;
            document.getElementById("rcoin").innerHTML = rcoin;
            document.getElementById("coinpersecond").innerHTML = coinpersecond;
            document.getElementById("ucbutton").disabled = true;
            var computerupgrade = document.getElementById("computerUpdate");
                computerupgrade.style.display = "inline-block";
            };
        }

        function upgradeRouter() {
        if (rcoin >= 90) {
            rcoin = rcoin - 90;
            coinpersecond = coinpersecond + 37;
            document.getElementById("rcoin").innerHTML = rcoin;
            document.getElementById("coinpersecond").innerHTML = coinpersecond;
            document.getElementById("urbutton").disabled = true;
            var routerupgrade = document.getElementById("routerUpdate");
                routerupgrade.style.display = "inline-block";
            };
        }

        function upgradeServer() {
        if (rcoin >= 200) {
            rcoin = rcoin - 200;
            coinpersecond = coinpersecond + 35;
            document.getElementById("rcoin").innerHTML = rcoin;
            document.getElementById("coinpersecond").innerHTML = coinpersecond;
            document.getElementById("usbutton").disabled = true;
            var serverupgrade = document.getElementById("serverUpdate");
                serverupgrade.style.display = "inline-block";
            };
        }
        
        function organiseload() {
            var loadorganisation = document.getElementById("showorganise")
            if (organisation === 3) {
                loadorganisation.style.display = "block"
            }
        }

        window.setInterval(organiseload,1)

        var showPeasant = 0
        
        function buyPeasant() {
            if (rcoin >= 60) {
            rcoin = rcoin - 60;
            showPeasant = showPeasant + 1;
            document.getElementById("showPeasant").innerHTML = showPeasant;
            document.getElementById("rcoin").innerHTML = rcoin;
            };
        }

        var showArmy = 0
        
        function buySmallArmy() {
            if (rcoin >= 150) {
            rcoin = rcoin - 150;
            showArmy = showArmy + 1;
            document.getElementById("rcoin").innerHTML = rcoin;
            document.getElementById("showArmy").innerHTML = showArmy;
            };
        }

        var showDivision = 0
        
        function buyArmouredDivision() {
            if (rcoin >= 350) {
            rcoin = rcoin - 350;
            showDivision = showDivision + 1;
            document.getElementById("rcoin").innerHTML = rcoin;
            document.getElementById("showDivision").innerHTML = showDivision;
            };
        }
        
        var avaliableprotests = 0
        
        function orgProtest() {
            if (showPeasant >= 10) {
            showPeasant = showPeasant - 10;
            avaliableprotests = ++avaliableprotests;
            document.getElementById("showPeasant").innerHTML = showPeasant;
            document.getElementById("avaliableprotests").innerHTML = avaliableprotests;
            };
        }

        var avaliablerevolutions = 0
        
        function orgRevolution() {
            if (showPeasant >= 15 && showArmy >= 4) {
            showPeasant = showPeasant - 15;
            showArmy = showArmy - 4;
            avaliablerevolutions = ++avaliablerevolutions;
            document.getElementById("showPeasant").innerHTML = showPeasant;
            document.getElementById("showArmy").innerHTML = showArmy;
            document.getElementById("avaliablerevolutions").innerHTML = avaliablerevolutions;
            };
        }

        var avaliablecivilwars = 0
        
        function orgCivilWar() {
            if (showPeasant >= 20 && showArmy >= 10 && showDivision >= 5) {
            showPeasant = showPeasant - 20;
            showArmy = showArmy - 10;
            showDivision = showDivision - 5;
            avaliablecivilwars = ++avaliablecivilwars
            document.getElementById("showPeasant").innerHTML = showPeasant;
            document.getElementById("showArmy").innerHTML = showArmy;
            document.getElementById("showDivision").innerHTML = showDivision;
            document.getElementById("avaliablecivilwars").innerHTML = avaliablecivilwars;
            };
        }
        
        //Antarctica

        var antHealth = 43
        
        function antProtest() {
            if (avaliableprotests >= 1) {
            avaliableprotests = avaliableprotests - 1;
            antHealth = antHealth - Math.floor((Math.random() * 5) + 3);
            document.getElementById("avaliableprotests").innerHTML = avaliableprotests;
            document.getElementById("antHealth").innerHTML = antHealth;
            };
        }
    
        function antRevolution() {
            if (avaliablerevolutions >= 1) {
            avaliablerevolutions = avaliablerevolutions - 1;
            antHealth = antHealth - Math.floor((Math.random() * 18) + 7);
            document.getElementById("avaliablerevolutions").innerHTML = avaliablerevolutions;
            document.getElementById("antHealth").innerHTML = antHealth;
            };
        }

        function antCivilWar() {
            if (avaliablecivilwars >= 1) {
            avaliablecivilwars = avaliablecivilwars - 1;
            antHealth = antHealth - Math.floor((Math.random() * 58) + 21);
            document.getElementById("avaliablecivilwars").innerHTML = avaliablecivilwars;
            document.getElementById("antHealth").innerHTML = antHealth;
            };
        }
                
        function antProgress() {
            var antarcticavictory = document.getElementById("antvictory");
            var antarcticabutton = document.getElementById("antbutton");
            if (0 >= antHealth) {
            antHealth = 0;
            antarcticabutton.style.display = "none";
            antarcticavictory.style.display = "inline-block";
            document.getElementById("antHealth").innerHTML = 0;
            document.getElementById("victorypts").innerHTML = victorypts;
            };
        }

        window.setInterval(antProgress,1)

        //Africa

        var afrHealth = 76
        
        function afrProtest() {
            if (avaliableprotests >= 1) {
            avaliableprotests = avaliableprotests - 1;
            afrHealth = afrHealth - Math.floor((Math.random() * 5) + 3);
            document.getElementById("avaliableprotests").innerHTML = avaliableprotests;
            document.getElementById("afrHealth").innerHTML = afrHealth;
            };
        }
    
        function afrRevolution() {
            if (avaliablerevolutions >= 1) {
            avaliablerevolutions = avaliablerevolutions - 1;
            afrHealth = afrHealth - Math.floor((Math.random() * 18) + 7);
            document.getElementById("avaliablerevolutions").innerHTML = avaliablerevolutions;
            document.getElementById("afrHealth").innerHTML = afrHealth;
            };
        }

        function afrCivilWar() {
            if (avaliablecivilwars >= 1) {
            avaliablecivilwars = avaliablecivilwars - 1;
            afrHealth = afrHealth - Math.floor((Math.random() * 58) + 21);
            document.getElementById("avaliablecivilwars").innerHTML = avaliablecivilwars;
            document.getElementById("afrHealth").innerHTML = afrHealth;
            };
        }
        
        function afrProgress() {
            var africavictory = document.getElementById("afrvictory");
            var africabutton = document.getElementById("afrbutton");
            if (0 >= afrHealth) {
            afrHealth = 0;
            africabutton.style.display = "none";
            africavictory.style.display = "inline-block";
            document.getElementById("afrHealth").innerHTML = 0;
            document.getElementById("victorypts").innerHTML = victorypts;
            };
        }

        window.setInterval(afrProgress,1)

        //Asia

        var asiHealth = 156
        
        function asiProtest() {
            if (avaliableprotests >= 1) {
            avaliableprotests = avaliableprotests - 1;
            asiHealth = asiHealth - Math.floor((Math.random() * 5) + 3);
            document.getElementById("avaliableprotests").innerHTML = avaliableprotests;
            document.getElementById("asiHealth").innerHTML = asiHealth;
            };
        }
    
        function asiRevolution() {
            if (avaliablerevolutions >= 1) {
            avaliablerevolutions = avaliablerevolutions - 1;
            asiHealth = asiHealth - Math.floor((Math.random() * 18) + 7);
            document.getElementById("avaliablerevolutions").innerHTML = avaliablerevolutions;
            document.getElementById("asiHealth").innerHTML = asiHealth;
            };
        }

        function asiCivilWar() {
            if (avaliablecivilwars >= 1) {
            avaliablecivilwars = avaliablecivilwars - 1;
            asiHealth = asiHealth - Math.floor((Math.random() * 58) + 21);
            document.getElementById("avaliablecivilwars").innerHTML = avaliablecivilwars;
            document.getElementById("asiHealth").innerHTML = asiHealth;
            };
        }
        
        function asiProgress() {
            var asiavictory = document.getElementById("asivictory");
            var asiabutton = document.getElementById("asibutton");
            if (0 >= asiHealth) {
            asiHealth = 0;
            asiabutton.style.display = "none";
            asiavictory.style.display = "inline-block";
            document.getElementById("asiHealth").innerHTML = 0;
            document.getElementById("victorypts").innerHTML = victorypts;
            };
        }

        window.setInterval(asiProgress,1)

        //Europe

        var eurHealth = 121
        
        function eurProtest() {
            if (avaliableprotests >= 1) {
            avaliableprotests = avaliableprotests - 1;
            eurHealth = eurHealth - Math.floor((Math.random() * 5) + 3);
            document.getElementById("avaliableprotests").innerHTML = avaliableprotests;
            document.getElementById("eurHealth").innerHTML = eurHealth;
            };
        }
    
        function eurRevolution() {
            if (avaliablerevolutions >= 1) {
            avaliablerevolutions = avaliablerevolutions - 1;
            eurHealth = eurHealth - Math.floor((Math.random() * 18) + 7);
            document.getElementById("avaliablerevolutions").innerHTML = avaliablerevolutions;
            document.getElementById("eurHealth").innerHTML = eurHealth;
            };
        }

        function eurCivilWar() {
            if (avaliablecivilwars >= 1) {
            avaliablecivilwars = avaliablecivilwars - 1;
            eurHealth = eurHealth - Math.floor((Math.random() * 58) + 21);
            document.getElementById("avaliablecivilwars").innerHTML = avaliablecivilwars;
            document.getElementById("eurHealth").innerHTML = eurHealth;
            };
        }
        
        function eurProgress() {
            var europevictory = document.getElementById("eurvictory");
            var europebutton = document.getElementById("eurbutton");
            if (0 >= eurHealth) {
            eurHealth = 0;
            europebutton.style.display = "none";
            europevictory.style.display = "inline-block";
            document.getElementById("eurHealth").innerHTML = 0;
            document.getElementById("victorypts").innerHTML = victorypts;
            };
        }

        window.setInterval(eurProgress,1)

        //North America

        var norHealth = 179
        
        function norProtest() {
            if (avaliableprotests >= 1) {
            avaliableprotests = avaliableprotests - 1;
            norHealth = norHealth - Math.floor((Math.random() * 5) + 3);
            document.getElementById("avaliableprotests").innerHTML = avaliableprotests;
            document.getElementById("norHealth").innerHTML = norHealth;
            };
        }
    
        function norRevolution() {
            if (avaliablerevolutions >= 1) {
            avaliablerevolutions = avaliablerevolutions - 1;
            norHealth = norHealth - Math.floor((Math.random() * 18) + 7);
            document.getElementById("avaliablerevolutions").innerHTML = avaliablerevolutions;
            document.getElementById("norHealth").innerHTML = norHealth;
            };
        }

        function norCivilWar() {
            if (avaliablecivilwars >= 1) {
            avaliablecivilwars = avaliablecivilwars - 1;
            norHealth = norHealth - Math.floor((Math.random() * 58) + 21);
            document.getElementById("avaliablecivilwars").innerHTML = avaliablecivilwars;
            document.getElementById("norHealth").innerHTML = norHealth;
            };
        }
        
        function norProgress() {
            var northvictory = document.getElementById("norvictory");
            var northbutton = document.getElementById("norbutton");
            if (0 >= norHealth) {
            norHealth = 0;
            northbutton.style.display = "none";
            northvictory.style.display = "inline-block";
            document.getElementById("norHealth").innerHTML = 0;
            document.getElementById("victorypts").innerHTML = victorypts;
            };
        }

        window.setInterval(norProgress,1)

        //SOUTH AMERICA

        var souHealth = 66
        
        function souProtest() {
            if (avaliableprotests >= 1) {
            avaliableprotests = avaliableprotests - 1;
            souHealth = souHealth - Math.floor((Math.random() * 5) + 3);
            document.getElementById("avaliableprotests").innerHTML = avaliableprotests;
            document.getElementById("souHealth").innerHTML = souHealth;
            };
        }
    
        function souRevolution() {
            if (avaliablerevolutions >= 1) {
            avaliablerevolutions = avaliablerevolutions - 1;
            souHealth = souHealth - Math.floor((Math.random() * 18) + 7);
            document.getElementById("avaliablerevolutions").innerHTML = avaliablerevolutions;
            document.getElementById("souHealth").innerHTML = souHealth;
            };
        }

        function souCivilWar() {
            if (avaliablecivilwars >= 1) {
            avaliablecivilwars = avaliablecivilwars - 1;
            souHealth = souHealth - Math.floor((Math.random() * 58) + 21);
            document.getElementById("avaliablecivilwars").innerHTML = avaliablecivilwars;
            document.getElementById("souHealth").innerHTML = souHealth;
            };
        }
        
        function souProgress() {
            var southvictory = document.getElementById("souvictory");
            var southbutton = document.getElementById("soubutton");
            if (0 >= souHealth) {
            souHealth = 0;
            southbutton.style.display = "none";
            southvictory.style.display = "inline-block";
            document.getElementById("souHealth").innerHTML = 0;
            document.getElementById("victorypts").innerHTML = victorypts;
            };
        }

        window.setInterval(souProgress,1)

        //Oceania

        var oceHealth = 79
        
        function oceProtest() {
            if (avaliableprotests >= 1) {
            avaliableprotests = avaliableprotests - 1;
            oceHealth = oceHealth - Math.floor((Math.random() * 5) + 3);
            document.getElementById("avaliableprotests").innerHTML = avaliableprotests;
            document.getElementById("oceHealth").innerHTML = oceHealth;
            };
        }
    
        function oceRevolution() {
            if (avaliablerevolutions >= 1) {
            avaliablerevolutions = avaliablerevolutions - 1;
            oceHealth = oceHealth - Math.floor((Math.random() * 18) + 7);
            document.getElementById("avaliablerevolutions").innerHTML = avaliablerevolutions;
            document.getElementById("oceHealth").innerHTML = oceHealth;
            };
        }

        function oceCivilWar() {
            if (avaliablecivilwars >= 1) {
            avaliablecivilwars = avaliablecivilwars - 1;
            oceHealth = oceHealth - Math.floor((Math.random() * 58) + 21);
            document.getElementById("avaliablecivilwars").innerHTML = avaliablecivilwars;
            document.getElementById("oceHealth").innerHTML = oceHealth;
            };
        }
        
        function oceProgress() {
            var oceaniavictory = document.getElementById("ocevictory");
            var oceaniabutton = document.getElementById("ocebutton");
            if (0 >= oceHealth) {
            oceHealth = 0;
            oceaniabutton.style.display = "none";
            oceaniavictory.style.display = "inline-block";
            document.getElementById("oceHealth").innerHTML = 0;
            document.getElementById("victorypts").innerHTML = victorypts;
            };
        }
        
        window.setInterval(oceProgress,1)

        //Remarks

        function endscene() {
            var hideeverything = document.getElementById("everything");         
            var showremark = document.getElementById("closingremarks");
            if (asiHealth == 0 && afrHealth == 0 && antHealth == 0 && eurHealth == 0 && oceHealth == 0 && norHealth == 0 && souHealth == 0) {
            hideeverything.style.display = "none";
            showremark.style.display = "block";
            document.getElementById("oceHealth").innerHTML = victorypts;
            };
        }
        
        window.setInterval(endscene,1)

//End

        












