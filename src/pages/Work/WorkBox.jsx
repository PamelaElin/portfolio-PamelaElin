import React from 'react';
import useStyles from './useStyles';

const WorkBox = ({pic,onClick,text}) => {
    const styles=useStyles();

  return (
    <div className={styles.workBox}>
            <div 
 >
    <img src={pic} alt="img" onClick={onClick} className={styles.bg}/>
            </div>
            <div className={styles.foot}>
                <p>{text}</p>
            </div>
            </div>
  )
}

export default WorkBox