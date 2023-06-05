// The marketing team is spending way too much time typing in hashtags. Let’s create a hashtag generator for them, our hashtag generator will meet the following criteria; 

// It must start with a hash symbol, #.

// Ignore all spaces in the input.

// All words must have their first letter capitalized.

// If the final result is going to be longer than 140 characters, it should return false.

// If the input or result is an empty string, it should return false.


function generateHashtag(input) {
    if (input.trim() === "") {
      return false;
    }
    
    var words = input.trim().split(" ");
    var capitalizedWords = words.map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
  
    var hashtag = "#" + capitalizedWords.join("");
  
    if (hashtag.length > 140) {
      return false;
    }
  
    return hashtag;
  }
  
  // Example usage:
  console.log(generateHashtag("InfluenceMakers"));                   // Output: "#InfluenceMakers"
  console.log(generateHashtag("TrendSetters"));            // Output: "#TrendSetters"
  console.log(generateHashtag("MarketingMastery"));  // Output: "#MarketingMastery"
  console.log(generateHashtag(""));                              // Output: false
  console.log(generateHashtag(" ".repeat(141)));                 // Output: false
  