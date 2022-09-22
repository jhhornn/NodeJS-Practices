#! /usr/bin/env node
import dotenv from 'dotenv';
dotenv.config();

import open from 'open';
import yargs from 'yargs';


const { argv } = yargs(process.argv);


const url = `https://www.google.com/search?q=${argv['_'].slice(2).join("+")}`;
if (argv["_"].slice(2).length > 0) {
    open(url)
}else{
    open('https://google.com')
}


