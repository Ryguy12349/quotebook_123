// This is an _object_: it lets us group related things together
const item = {
    quote:"This is the quote",
    title:"This is the content",
    image:"image.jpg"
    };

// We could access stuff from within this like so:

// item.title
// item.quote


// To use images in Astro we have to import them:

import quote1image from "../assets/images/man-throwing-a-stone.jpg"
import quote2image from "../assets/images/man-throwing-a-stone.jpg"
import quote3image from "../assets/images/man-throwing-a-stone.jpg"
import quote4image from "../assets/images/man-throwing-a-stone.jpg"
import quote5image from "../assets/images/man-throwing-a-stone.jpg"



// To use Markdown in Astro we have to import them:


import {Content as Anon} from "@content/anon.md"
import {Content as LaoTzu} from "@content/laoTzu.md"
import {Content as GKChesterton} from "@content/gkChesterton.md"
import {Content as MarcusAurelius} from "@content/marcusAurelius.md"
import {Content as TheodoreRoosevelt} from "@content/theodoreRoosevelt.md"


// We can make an array of 

export const quotes = [
    {Content: Anon ,quote:'“The day you plant the seed is not the day you eat the fruit.”', image:quote1image},
    {Content: LaoTzu ,quote:'“The journey of a thousand miles begins with one step.”', image:quote2image},
    {Content: GKChesterton ,quote:'“Anything worth doing is worth doing badly.”', image:quote3image},
    {Content: MarcusAurelius ,quote:'“It is not death a man should fear, but he should fear never beginning to live.”', image:quote4image},
    {Content: TheodoreRoosevelt ,quote:'“Do what you can with what you have, where you are.”', image:quote5image}];


// Arrow function
