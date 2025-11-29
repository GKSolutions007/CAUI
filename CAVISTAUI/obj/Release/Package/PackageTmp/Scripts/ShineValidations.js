//jQuery(document).ready(function () {

function Trimvalues(){
    $("input,textarea").each(function() {
        $(this).val($.trim($(this).val()));
    });
}
function MobilenoValidation(value, errordiv, IsMandatory) {
        if (IsMandatory && value.val().length < 10) {
            $(errordiv).html('* Mobile Number should contain 10 or 12 digits ')
            return false;
        }
        else if (!IsMandatory && (value.val().length >= 1 && value.val().length < 10)) {
            $(errordiv).html('* Mobile Number should contain 10 or 12 digits ')
            return false;
        }
        return true;
    }
    function MandatoryValidation(value, errordiv) {        
        if (value.val() == '') {
            $(errordiv).html('* Field Should not be Empty')
            return false;
        }        
        return true;
    }
    function EmailValidation(value, errordiv, IsMandatory) {       
        var strRegex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (IsMandatory && !strRegex.test(value.val())) {
            $(errordiv).html('* Invalid Email Format (Ex. example@email.com)')
            return false;
        }
        else if (IsMandatory && value.val().length == 0) {
            $(errordiv).html('* Email ID should not be empty')
            return false;
        }
        else if (!IsMandatory && !strRegex.test(value.val()) && value.val().length > 0) {
            $(errordiv).html('* Invalid Email Format (Ex. example@email.com)')
            return false;
        }
        return true;
    }
    function ComparePassword(value1, value2, errordiv) {
        if (value1.val() != value2.val()) {
            $(errordiv).html('* Password and Confirm Password Should be Same')
            return false;
        }
        return true;
    }
    function AadharValidation(value, errordiv) {
        var strRegex = /^([[0-9]{12})+$/;
        if (!strRegex.test(value.val())) {// && value.val().length > 0
            $(errordiv).html('* Aadhar Number Should be 12 Digits')
            return false;
        }
        return true;
    }
    function PANValidation(value, errordiv, IsMandatory) {
        var strRegex = /^([a-zA-Z]{5}\d{4}[a-zA-Z]{1})+$/;

        if (IsMandatory && !strRegex.test(value.val())) {
            $(errordiv).html('*PAN must 10 characters (alphabets-5 numeric-4 alphabet-1)');
            return false;
        }
        else if (!IsMandatory && !strRegex.test(value.val()) && value.val().length > 0) {
            $(errordiv).html('*PAN must 10 characters (alphabets-5 numeric-4 alphabet-1)');
            return false;
        }
        return true;
    }
    function MICRValidation(value, errordiv) {
        var strRegex = /^([[0-9]{9})+$/;
        if (!strRegex.test(value.val()) && value.val().length > 0) {
            $(errordiv).html('* MICR Should be 9 Digits')
            return false;
        }
        return true;
    }
    function IFSCValidation(value, errordiv) {
        var strRegex = /^([a-zA-Z]{4}[0-9A-Za-z]{7})+$/;
        if (!strRegex.test(value.val()) && value.val().length > 0) {
            $(errordiv).html('*Invalid IFSC format (alphabets-4, alphanumeric-7)')
            return false;
        }
        return true;
    }
    function GSTINValidation(value, errordiv) {
        var strRegex = /^([0-9]{2}[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[0-9a-zA-Z]{3})+$/;
        if (!strRegex.test(value.val()) && value.val().length > 0) {
            $(errordiv).html('GSTIN Number Must 15 characters (Numeric-2 Alpha-5 Numeric-4 Alpha-1 AlphaNumeric-3)')
            return false;
        }
        return true;
    }
    function DispalyCount(val1,val2,val3,Title) {
        var countof = '<table class="table table-hover table-bordered" style="width:100%;"><th style="text-align:center;background-color: skyblue">Total </th><th style="text-align:center;background-color: skyblue">Active </th><th style="text-align:center;background-color: skyblue">In-Active </th><tr><td style="text-align:center"><label id="totcount" style="text-align:center;color:orange;font-size:30px"> ' + val1 + ' </label></td><td style="text-align:center"><label id="Actcount" style="text-align:center;color:forestgreen;font-size:30px">' + val2 + ' </label></td><td style="text-align:center"><label id="Inactcount" style="text-align:center;color:hotpink;font-size:30px">' + val3 + ' </label></td></tr></table>';
        var titlec = '<p style="font-size:15px"><b>Count of ' + Title + ' :</b></p>';
        return titlec + countof;
    }
    function FSSAIValidation(value, errordiv) {
        var strRegex = /^([[0-9]{14})+$/;
        if (!strRegex.test(value.val()) && value.val().length > 0) {
            $(errordiv).html('*Invalid FSSAI format (14 Numerics Only)')
            return false;
        }
        return true;
    }
    function PINCodeValidation(value, errordiv) {
        var strRegex = /^([[0-9]{6})+$/;
        if (!strRegex.test(value.val()) && value.val().length > 0) {
            $(errordiv).html('*Invalid PIN Code format (6 Numerics Only)')
            return false;
        }
        return true;
    }
    function SetValueZeorforfield(values) {
        for (var i = 0; i < values.length; i++) {
            if (values[i][0].value == "") {
                values[i][0].value('0');
            }
        }
    }
    function getCurrentDate() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }
        today = yyyy + '-' + mm + '-' + dd;        
        return today;
    }
    function NumericOnlyKeypress(key, errorMsgDiv) {
        $(errorMsgDiv).html('');
        if ((key.charCode < 48 || key.charCode > 57) /* Numeric */
            && (key.keyCode != 13)  /* Enter */ && key.which != 8 /* Back Space */
            && key.keyCode != 9 /* Tab */ //&& key.keyCode != 116 /* F5 */
            ) {
            key.preventDefault();
            $(errorMsgDiv).html('* Invalid Key');
            return false;
        }
    }
    function NumaricWithDecimalValue(key, errorMsgDiv) {
        $(errorMsgDiv).html('');
        if ((key.charCode < 48 || key.charCode > 57) /* Numeric */
            && (key.charCode != 46)  /* . */
            && (key.keyCode != 13)  /* Enter */ && key.which != 8 /* Back Space */
            && key.which != 32 /* Space */ && key.keyCode != 37 /* Left Arrow */
            && key.keyCode != 38 /* Up Arrow */ && key.keyCode != 39 /* Right Arrow */
            && key.keyCode != 40 /* Down Arrow */ && key.keyCode != 9 /* Tab */
            //&& key.keyCode != 116 /* F5 */
            ) {
            key.preventDefault();
            $(errorMsgDiv).html('* Invalid Key');
            return false;
        }
    }

        function AlphaNumericKeypress(key, errorMsgDiv) {
            $(errorMsgDiv).html('');
            if ((key.charCode < 48 || key.charCode > 57) /* Numeric */
                && (key.charCode < 65 || key.charCode > 90) /* Upper Alpha */
                && (key.charCode < 97 || key.charCode > 122) /* Lower Alpha */
                && key.keyCode != 116 /* F5 */
                ) {
                key.preventDefault();
                $(errorMsgDiv).html('* Invalid Key');
                return false;
            }
        }
        function AlphabetwithDotKeypress(key, errorMsgDiv) {
            $(errorMsgDiv).html('');
            if ((key.charCode < 65 || key.charCode > 90) /* Upper Alpha */
                && (key.charCode < 97 || key.charCode > 122) /* Lower Alpha */
                && key.keyCode != 190 /* . */
                ) {
                key.preventDefault();
                $(errorMsgDiv).html('* Invalid Key');
                return false;
            }
        }
    
    function AlphaNumaricWithSplCharKeypress(key, errorMsgDiv) {
        $(errorMsgDiv).html('');
        if ((key.charCode < 48 || key.charCode > 57) /* Numeric */
            && (key.charCode < 65 || key.charCode > 90) /* Upper Alpha */
            && (key.charCode < 97 || key.charCode > 122) /* Lower Alpha */
            && (key.charCode != 126) /* ~ */ && (key.charCode != 64)  /* @@ */
            && (key.charCode != 37)  /* % */ && (key.charCode != 38)  /* & */
            && (key.charCode != 42)  /* * */ && (key.charCode != 40)  /* ( */
            && (key.charCode != 41)  /* ) */ && (key.charCode != 45)  /* - */
            && (key.charCode != 95)  /* _ */ && (key.charCode != 47)  /* / */
            && (key.charCode != 46)  /* . */ && (key.charCode != 44)  /* , */
            && (key.keyCode != 13)  /* Enter */ && key.which != 8 /* Back Space */
            && key.which != 32 /* Space */ && key.keyCode != 37 /* Left Arrow */
            && key.keyCode != 38 /* Up Arrow */ && key.keyCode != 39 /* Right Arrow */
            && key.keyCode != 40 /* Down Arrow */ && key.keyCode != 9 /* Tab */
            && key.keyCode != 116 /* F5 */
            ) {
            key.preventDefault();
            $(errorMsgDiv).html('* Invalid Key');
            return false;
        }
    }
    function SetTagFocusInOut(FromID, ToID, FocusMode,Round) {
        if (FocusMode == 1) {//focus out
            var FromVal = parseFloat($(FromID).val());
            var rrv = parseFloat(FromVal).toFixed(Round);
            $(ToID).val(FromVal);
            $(FromID).val(rrv);
        } else if (FocusMode == 2) { // focus IN
            var ToVal = $(ToID).val();
            $(FromID).val(ToVal);
        }
    }
    function SetTagFocusInOutlbl(FromID, ToID, FocusMode, Round) {
        if (FocusMode == 1) {//focus out
            var FromVal = parseFloat($(FromID).text());
            var rrv = parseFloat(FromVal).toFixed(Round);
            $(ToID).val(FromVal);
            $(FromID).text(rrv);
        } else if (FocusMode == 2) { // focus IN
            var ToVal = $(ToID).val();
            $(FromID).text(ToVal);
        }
    }
    function setTagValue(ID, Value, Rounds) {
        if (Value != "") {
            var ids = document.getElementById(ID);
            ids.value = Value;
            ids.name = parseFloat(ids.value).toFixed(6);
            return parseFloat(ids.name).toFixed(Rounds);
        } else {
            var ids = document.getElementById(ID);
            ids.name = parseFloat(0.00).toFixed(6);
            return parseFloat(ids.name).toFixed(2);
        }
    }
    function getTagValue(ID) {
        var ids = document.getElementById(ID);
        return parseFloat(ids.name).toFixed(6);
    }
    function SetDecimalvalue(RType, Value, Decimalplaces) {
        if (RType == 1) {
            return parseFloat(Value).toFixed(6);
        } else {
            return parseFloat(Value).toFixed(Decimalplaces);
        }
    }
//});
function showSuccessSnackbar(message) {
    const toastBox = document.querySelector('.toastBox');
    let toastTimeout;
    let existingToast;
    // If a toast is already present, remove it before creating a new one
    if (existingToast) {
        clearTimeout(toastTimeout);
        existingToast.remove();
    }

    const toast = document.createElement('div');
    toast.classList.add('toastSuccess');
    toast.innerHTML = `<button class="close-btn-sb">X</button><i class="fas fa-check-circle"></i> ${message}`;
    toastBox.appendChild(toast);
    existingToast = toast;

    const closeButton = toast.querySelector('.close-btn-sb');
    closeButton.addEventListener('click', () => {
        toast.remove();
        clearTimeout(toastTimeout);
        existingToast = null;
    });    
    speakFemaleVoice(message);
    toastTimeout = setTimeout(() => {
        toast.remove();
        existingToast = null;
    }, 3000);
}
function showErrorSnackbar(message) {
    const toastBox = document.querySelector('.toastBox');
    let toastTimeout;
    let existingToast;
    // If a toast is already present, remove it before creating a new one
    if (existingToast) {
        clearTimeout(toastTimeout);
        existingToast.remove();
    }

    const toast = document.createElement('div');
    toast.classList.add('toastError');
    toast.innerHTML = `<button class="close-btn-sb">X</button><i class="fas fa-remove"></i> ${message}`;
    toastBox.appendChild(toast);
    existingToast = toast;

    const closeButton = toast.querySelector('.close-btn-sb');
    closeButton.addEventListener('click', () => {
        toast.remove();
        clearTimeout(toastTimeout);
        existingToast = null;
    });

    toastTimeout = setTimeout(() => {
        toast.remove();
        existingToast = null;
    }, 3000);
}

function showInfoSnackbar(message) {
    const toastBox = document.querySelector('.toastBox');
    let toastTimeout;
    let existingToast;
    // If a toast is already present, remove it before creating a new one
    if (existingToast) {
        clearTimeout(toastTimeout);
        existingToast.remove();
    }
    const toast = document.createElement('div');
    toast.classList.add('toastInfo');
    toast.innerHTML = `<button class="close-btn-sb">X</button><i class="fa-solid fa-circle-info"></i> ${message}`;
    toastBox.appendChild(toast);
    existingToast = toast;

    const closeButton = toast.querySelector('.close-btn-sb');
    closeButton.addEventListener('click', () => {
        toast.remove();
        clearTimeout(toastTimeout);
        existingToast = null;
    });

    toastTimeout = setTimeout(() => {
        toast.remove();
        existingToast = null;
    }, 3000);
}
function VoiceMessage(message) {
    //const message = document.getElementById("message").value;
    // Create a new SpeechSynthesisUtterance
    const utterance = new SpeechSynthesisUtterance(message);

    // Optional settings
    utterance.lang = 'en-US';       // Language
    utterance.rate = 1;             // Speed (0.1 to 10)
    utterance.pitch = 1;            // Pitch (0 to 2)
    utterance.volume = 1;           // Volume (0 to 1)
    // Speak the message
    //window.speechSynthesis.speak(utterance);
    speakFemaleVoice(message);
}
let voices = [];

// Load voices correctly
function loadVoices() {
    voices = speechSynthesis.getVoices();

    if (!voices.length) {
        speechSynthesis.onvoiceschanged = () => {
            voices = speechSynthesis.getVoices();
            //console.log("Voices loaded:", voices.map(v => v.name + ' (' + v.lang + ')'));
        };
    } else {
        //console.log("Voices loaded:", voices.map(v => v.name + ' (' + v.lang + ')'));
    }
}

loadVoices();

function speakFemaleVoice(message) {
    //const message = document.getElementById("message").value;
    const utterance = new SpeechSynthesisUtterance(message);

    const femaleVoice = voices.find(voice =>
        voice.name.includes("Heera") ||                     // Microsoft Heera (female, India)
        voice.name.includes("Zira") ||                      // Microsoft Zira (female, US)
        voice.name.includes("Samantha") ||                  // macOS
        voice.name.includes("Victoria") ||                  // macOS
        voice.name.includes("Google UK English Female") ||  // Chrome
        voice.name.toLowerCase().includes("female")
    );

    if (femaleVoice) {
        utterance.voice = femaleVoice;
        //console.log("✅ Using female voice:", femaleVoice.name);
    } else {
       // console.warn("⚠️ Female voice not found. Using default.");
    }

    // Optional settings
    utterance.lang = femaleVoice?.lang || 'en-US';
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;

    speechSynthesis.speak(utterance);
}

function speakMaleVoice(message) {
    //const message = document.getElementById("message").value;
    const utterance = new SpeechSynthesisUtterance(message);

    const maleVoice = voices.find(voice =>
        voice.name.includes("Ravi") ||                     // Microsoft David
        voice.name.includes("Mark") ||                      // macOS male
        voice.name.includes("Google UK English Male") ||    // Chrome male
        voice.name.toLowerCase().includes("male")
    );

    if (maleVoice) {
        utterance.voice = maleVoice;
        //console.log("✅ Using male voice:", maleVoice.name);
    } else {
        //console.warn("⚠️ Male voice not found. Using default.");
    }

    // Optional settings
    utterance.lang = maleVoice?.lang || 'en-US';
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;

    speechSynthesis.speak(utterance);
}