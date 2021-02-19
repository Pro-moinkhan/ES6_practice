// TODO making a javascript template:
    const firstName = "Moin";
    const lastName = "Rifat";
const manualAddingStringRuleToParaMeter = firstName + " and " + lastName + " are good friends."; //1. NOTE this is the manual rule.
const template = `${firstName} and ${lastName} are good friends.` //2. NOTE look carefully: we don't use the double quotation, and give space manually,
console.log(manualAddingStringRuleToParaMeter);                   // ~ NOTE but our in result the sentence is perfect with variable name & spacing. it
console.log(template);                                            // ~ NOTE called javascript template where we can declared variable name using, ${ --- }
                                                                  // ~ NOTE and simple sentence, inside (` --- `), `` --> this called cared symbol.

 //3. NOTE multi line with manual rule:
const manualMultiLine = "omit\n"
+"fahim\n"                       
+"himel\n"
console.log(manualMultiLine);

//4. NOTE multi line with `caret` (ES6 rule):
const multiLineWithES6 = `omit
fahim
himel`
console.log(multiLineWithES6);
