import classNames from 'classnames';

const Container = ({className = '', noPadding = false, children}) => {

    const arrayClasses = [
        { [`${className}`] : className},
        'o-container'
    ]

    if (noPadding){
        arrayClasses.push('no-padding')
    }
    
    let classes = classNames(arrayClasses);

    return (
        <div className={classes}>{children}</div>
    )
}

export default Container