document.addEventListener("DOMContentLoaded", function () {
    console.log("data", data);
    document.getElementById('button').onclick = function (e) {
        function isInt(value) {
            return !isNaN(value) &&
                parseInt(Number(value)) == value &&
                !isNaN(parseInt(value, 10));
        }
        var num = document.getElementById('textbox').value;
        num = isInt(num) ? num : 69;

        var thaithai = data[num][0];
        var thaienglish = data[num][1];

        //audio test
        var num = 1;
        var audio = document.getElementById("audio");
        audio.playbackRate = 4;
        audio.src = "sounds/$1.mp3";
        audio.play();
        audio.onended = function() {
            num++;
            audio.src = "sounds/$" + num + ".mp3";
            audio.play();
            num === 10 ? audio.onended = null : null;
        };



        document.getElementById("num").innerHTML = "Number: " + num;
        document.getElementById("length").innerHTML = "Length: " + num.length;
        document.getElementById("thaithai").innerHTML = "Thai (Thai Writing): " + thaithai;
        document.getElementById("thaienglish").innerHTML = "Thai (English Writing): " + thaienglish;
           
    }
});