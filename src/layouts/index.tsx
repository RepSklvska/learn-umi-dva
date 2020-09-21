import React from 'react';
import { History, IRoute, Location, Link } from 'umi'
import { Layout, Menu } from 'antd'
const { Header, Content, Footer } = Layout;

function BasicLayout(props: any) {
	const pathname = props.location.pathname
	return (
		<Layout>
			<Header>
				<Menu
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={[pathname]}
					style={{ lineHeight: '64px' }}
				>
					<Menu.Item key="/hero">
						<Link to="hero">英雄</Link>
					</Menu.Item>
					<Menu.Item key="/item">
						<Link to="item">局内道具</Link>
					</Menu.Item>
					<Menu.Item key="/summoner">
						<Link to="summoner">召唤师技能</Link>
					</Menu.Item>
				</Menu>
			</Header>
			<Content style={{ padding: '0 50px' }}>
				<div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
					{props.children}
				</div>
			</Content>
			<Footer style={{ textAlign: 'center' }}>Umi 入门教程 Created by xiaohuoni</Footer>
		</Layout>
	);
}
export default BasicLayout;