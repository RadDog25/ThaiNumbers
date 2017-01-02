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
        var list = ["3", "9", "10", "5", "2", "6", "7", "0", "2"] //here length = 6, cannot let list[6] happen
        var count = 0;
        audio.playbackRate = 3.0;
        audio.src = "sounds/$" + list[count] + ".mp3";
        audio.play();
        audio.onended = function() {
            count++;
            audio.src = "sounds/$" + list[count] + ".mp3";
            audio.play();
            count === list.length - 1 ? audio.onended = null : null;
        };



        document.getElementById("num").innerHTML = "Number: " + num;
        document.getElementById("length").innerHTML = "Length: " + num.length;
        document.getElementById("thaithai").innerHTML = "Thai (Thai Writing): " + thaithai;
        document.getElementById("thaienglish").innerHTML = "Thai (English Writing): " + thaienglish;
           
    }
});