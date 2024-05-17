// userInfo.js

// user profile function
function createUserProfiles(names, modifiedNames) {
    if (names.length !== modifiedNames.length) {
        throw new Error("Input arrays must have the same length");
    }

    const userProfiles = [];

    // auto-increment id starting from 1
    for (let i = 0; i < names.length; i++) {
        const initialName = names[i];
        const modifiedName = modifiedNames[i];

        const profile = {
            id: i + 1,
            originalName: initialName,
            modifiedName: modifiedName,
        };
        userProfiles.push(profile);
    }
    return userProfiles;
}

// Test example

const testNames = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
const testModifiedNames = ["sky", "HACK", "life", "GOLD", "home", "CITY"];
const userProfiles = createUserProfiles(testNames, testModifiedNames);
console.log(JSON.stringify(userProfiles, null, 2));

