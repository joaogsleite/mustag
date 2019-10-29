#!/usr/bin/env node

const { getOption, getArg } = require('./utils/cli')

global.COMPONENTS = getOption('-c', '--components')
global.VIEWS = getOption('-v', '--view')
global.DIST = getArg(-1)

require('./views')
