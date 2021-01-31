/*
Problem:
input: two strings 
output: a number, representing the number of dirernces between the two strings


Examples: See testing code


Data Structures:
A class that contains two methods and one property:
constructor:
    declares strand property

hammingDistance:
    calculates the number of differences between the strand string and the
    input sting


Algorithm:
FOR hammindDistance methdod:
    takes one string input:
        delcare a counter
        loop through the this.strand string
            on each char, compare the current char to the current char of the
            input string
            if they are different add one to a counter
            return the count


*/

class DNA {
    constructor(strand) {
        this.strand = strand;
    }

    hammingDistance(distance) {
        let total = 0;

        for (let indx = 0; indx < this.strand.length; indx += 1) {
            let currentStrand = this.strand[indx];
            let currentDistance = distance[indx];
            
            if (currentDistance !== currentStrand) {
                total += 1;
            }
        }

        return total;
    }
}

module.exports = DNA;