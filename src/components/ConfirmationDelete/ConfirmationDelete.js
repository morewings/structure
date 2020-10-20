import React from 'react';
import {Icon} from 'src/ui/Icon';
import {Button} from 'src/ui/Button';
import classes from './ConfirmationDelete.module.css';

const ConfirmationDelete = () => (
  <div className={classes.confirmation}>
    <main className={classes.main}>
      <div className={classes.left}>
        <Icon name="help" className={classes.icon} />
      </div>
      <div className={classes.text}>
        Do you want to delete local data? All progress will be lost.
      </div>
    </main>
    <footer className={classes.footer}>
      <div className={classes.edit}>
        <Button type="danger" icon="cancel" text="No" onClick={() => {}} />
      </div>
      <div className={classes.showChildren}>
        <Button type="confirm" icon="confirm" text="Yes" onClick={() => {}} />
      </div>
    </footer>
  </div>
);

export default ConfirmationDelete;
