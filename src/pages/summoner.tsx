import React, { FC } from 'react';
import styles from './summoner.less';
import { connect, SummonModelState, ConnectProps } from 'umi';

interface PageProps extends ConnectProps {
  summon: SummonModelState;
}

const Summon: FC<PageProps> = (props) => {
  console.log(props.summon);
  return (
    <div>
      <h1 className={styles.title}>Page summon</h1>
      <h2>This is {props.summon.name}</h2>
    </div>
  );
}

export default connect(({ summon }: { summon: SummonModelState }) => ({ summon }))(Summon);
