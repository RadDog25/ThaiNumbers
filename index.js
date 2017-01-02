document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('button').onclick = function (e) {
        function isInt(value) {
            return !isNaN(value) &&
                parseInt(Number(value)) == value &&
                !isNaN(parseInt(value, 10));
        }
        var num = document.getElementById('textbox').value;

        //generate thai number
        var thaithai = "";
        var thaienglish = "";
        var thaisound = []
        if (data[num]) {
            thaithai = data[num][0];
            thaienglish = data[num][1];
            thaisound = [num];
        }
        else if (num < 10000 && isInt(num)) {
            let copy = num;
            let foo = Math.floor(copy / 1000);

            if (foo != 0) {
                thaithai += data[foo][0] + data["phan"][0];
                thaisound.push(foo);
                thaisound.push("phan");
                thaienglish += data[foo][1] + " " + data["phan"][1] + " ";
            }
            copy -= foo * 1000;

            foo = Math.floor(copy / 100);
            if (foo != 0) {
                thaithai += data[foo][0] + data["roi"][0];
                thaisound.push(foo);
                thaisound.push("roi");
                thaienglish += data[foo][1] + " " + data["roi"][1] + " ";
            }
            copy -= foo * 100;

            foo = Math.floor(copy / 10) === 2 ? "yee" : Math.floor(copy / 10);
            if (foo != 0) {
                thaithai = foo != 1 ? thaithai + data[foo][0] + data[10][0] : thaithai + data[10][0];
                foo != 1 ? thaisound.push(foo) : null;
                thaisound.push(10);
                thaienglish = foo != 1 ? thaienglish + data[foo][1] + " " + data[10][1] + " " : thaienglish + data[10][1] + " ";
            }
            copy = foo === "yee" ? copy - 20 : copy - foo * 10;

            foo = copy === 1 ? "et" : copy;
            if (foo != 0) {
                thaithai += data[foo][0];
                thaisound.push(foo);
                thaienglish += data[foo][1];
            }
        }
        else {
            console.log("not valid");
        }

        //now play audio based on thaisound array
        var audio = document.getElementById("audio");
        var count = 0;
        audio.defaultPlaybackRate = 1.8;
        audio.src = "sounds/$" + thaisound[count] + ".mp3";
        audio.play();
        audio.onended = thaisound.length > 1 ? function() {
            count++;
            audio.src = "sounds/$" + thaisound[count] + ".mp3";
            audio.play();
            count === thaisound.length - 1 ? audio.onended = null : null;
        } : null;
        
        document.getElementById("num").innerHTML = "Number: " + num;
        document.getElementById("thaithai").innerHTML = "Thai (Thai Writing): " + thaithai;
        document.getElementById("thaienglish").innerHTML = "Thai (English Writing): " + thaienglish;
    }
});