//#! /usr/bin/env node
import dotenv from 'dotenv';
dotenv.config();

import yargs from 'yargs';
import open from 'open';


const { argv } = yargs(process.argv);

const url = `https://www.google.com/search?q=${argv['_'].slice(2).join("+")}`;
if (argv["_"].slice(2).length > 0) {
    open(url)
}else{
    open('https://google.com')
}
