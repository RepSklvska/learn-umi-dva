import React, { FC } from 'react';
import styles from './hero.less';
import { connect, HeroModelState, ConnectProps } from 'umi'; // ---step1
// step1: 在文件头部引入了 umi 的connect,HeroModelState, ConnectProps

interface PageProps extends ConnectProps {
  hero: HeroModelState;
}

const Hero: FC<PageProps> = (props) => {        // ---step2
  // step2: 把之前的匿名函数，改成实名函数Hero
  console.log(props.hero);// --- step4
  // step4: 从属性中取出namespace为hero的model的state数据
  return (
    <div>
      <h1 className={styles.title}>Page hero</h1>
      <h2>This is {props.hero.name}</h2>
    </div>
  );
}

export default connect(({ hero }: { hero: HeroModelState }) => ({ hero }))(Hero);
// --- step3
// step3: 使用connect连接页面和models