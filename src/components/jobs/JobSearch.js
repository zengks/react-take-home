export const searchJobs = (jobs, loc, team, type) =>{

    if(loc === 'ALL LOCATIONS' && team === 'ALL TEAMS' && type === 'ALL WORK TYPES') return jobs

    let activeFields = []

    if(!loc.includes('ALL')) {activeFields.push('l')}
    if(!team.includes('ALL')) {activeFields.push('t')}
    if(!type.includes('ALL')) {activeFields.push('w')}

    switch(activeFields.length) {
        case 1: 
            return lengthOne(activeFields, jobs, loc, team, type);
        case 2:
            return lengthTwo(activeFields, jobs, loc, team, type);
        case 3:
            return lengthThree(jobs, loc, team, type);
        default: 
            break;
    }
}

const lengthOne = (activeFields, jobs, loc, team, type) => {
    if(activeFields[0] === 'l') {return searchOne(jobs, loc, 'l')}
    if(activeFields[0] === 't') {return searchOne(jobs, team, 't')}
    if(activeFields[0] === 'w') {return searchOne(jobs, type, 'w')}
}

const lengthTwo = (activeFields, jobs, loc, team, type) => {
    if(activeFields[0]==='l' && activeFields[1]==='t') {return searchTwo(jobs, activeFields, loc, team)}
    if(activeFields[0]==='t' && activeFields[1]==='w') {return searchTwo(jobs, activeFields, team, type)}
    if(activeFields[0]==='l' && activeFields[1]==='w') {return searchTwo(jobs, activeFields, loc, type)}
}

const lengthThree = (jobs, loc, team, type) => {
    return searchThree(jobs, loc, team, type)
}

const searchOne = (jobs, selected, letter) => {
    
    let found = []

    if(letter === 'l') {
        jobs.map(job => (
            job.categories.location === selected && 
            found.push(job)
        ))
    } else if(letter === 't') {
        jobs.map(job => (
            job.categories.team === selected && 
            found.push(job)
        ))
    } else if(letter === 'w') {
        jobs.map(job => (
            (job.categories.commitment !== undefined &&
            job.categories.commitment === selected) && 
            found.push(job)
        ))
    }

    return found

}

const searchTwo = (jobs, active, selected1, selected2) => {
    
    let found = []
    
    if(active[0] === 'l' && active[1] === 't') {
        jobs.map(job => (
            (job.categories.location === selected1 && job.categories.team === selected2) && found.push(job)
        ))
        
    } else if(active[0] === 't' && active[1] === 'w'){
        jobs.map(job => (
            (job.categories.team === selected1 &&
            job.categories.commitment !== undefined &&
            job.categories.commitment === selected2) && 
            found.push(job)
        ))
    } else if(active[0] === 'l' && active[1] === 'w'){
        jobs.map(job => (
            (job.categories.location === selected1 &&
            job.categories.commitment !== undefined &&
            job.categories.commitment === selected2) && 
            found.push(job)
        ))
    }

    return found
}

const searchThree = (jobs, loc, team, type) => {
    let found = []

    jobs.map(job => (
        (job.categories.location === loc &&
        job.categories.team === team &&
        job.categories.commitment !== undefined &&
        job.categories.commitment === type) && 
        found.push(job)
    ))

    return found
}