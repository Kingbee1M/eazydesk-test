import React, { useState } from 'react'
import Header from '../Header'

const Chat = () => {


	const [activeTab, setActiveTab] = useState("Open");

	const handleTabClick = (tabName: string) => {
		setActiveTab(tabName);
	};

	return (
		<div id="page-wrapper">
			<Header />
			<main>
				<div className='chat_container'>
					{/* <!-- char-area --> */}
					<section className="message-area container_80 ">
						<div className="container">
							<div className="row">
								<div className="col-12">
									<div className="chat-area">
										{/* <!-- chatlist --> */}
										<div className="chatlist">
											<div className="modal-dialog-scrollable">
												<div className="modal-content">
													<div className="chat-header">
														<div className="msg-search">
															<a className="add"  >
																<img className="img-fluid" src="https://mehedihtml.com/chatbox/assets/img/add.svg" alt="add" /></a>
														</div>

														<div>
															<ul className="nav_tabs_container">
																<li
																	className={`nav-item ${activeTab === "Open" ? "active" : ""}`}
																	onClick={() => handleTabClick("Open")}
																>
																	Open
																</li>
																<li
																	className={`nav-item ${activeTab === "Closed" ? "active" : ""}`}
																	onClick={() => handleTabClick("Closed")}
																>
																	Closed
																</li>
															</ul>
														</div>
													</div>

													{activeTab === "Open" &&
														<div className="chat-list">
															<a href="#" className="d-flex align-items-center">
																<div className="flex-shrink-0">
																	<img className="img-fluid" src="https://mehedihtml.com/chatbox/assets/img/user.png" alt="user img" />
																	<span className="active"></span>
																</div>
																<div className="flex-grow-1 ms-3">
																	<h3>Mehedi Hasan</h3>
																	<p>front end developer</p>
																</div>
															</a>
														</div>}

													{activeTab === "Closed" &&
														<div className="chat-list">
															<a href="#" className="d-flex align-items-center">
																<div className="flex-shrink-0">
																	<img className="img-fluid" src="https://mehedihtml.com/chatbox/assets/img/user.png" alt="user img" />
																	<span className="active"></span>
																</div>
																<div className="flex-grow-1 ms-3">
																	<h3>Mehedi Hasan</h3>
																	<p>front end developer</p>
																</div>
															</a>
															<a href="#" className="d-flex align-items-center">
																<div className="flex-shrink-0">
																	<img className="img-fluid" src="https://mehedihtml.com/chatbox/assets/img/user.png" alt="user img" />
																</div>
																<div className="flex-grow-1 ms-3">
																	<h3>Ryhan</h3>
																	<p>front end developer</p>
																</div>
															</a>
														</div>}

												</div>
											</div>
										</div>

										{/* <!-- chatbox --> */}
										<div className="chatbox">
											<div className="modal-dialog-scrollable">
												<div className="modal-content">
													<div className="msg-head">
														<div className="row">
															<div className="col-8">
																<div className="d-flex align-items-center">
																	<span className="chat-icon">

																		<img className="img-fluid" src="https://mehedihtml.com/chatbox/assets/img/arroleftt.svg" alt="image title" />
																	</span>
																	<div className="flex-shrink-0">
																		<img className="img-fluid" src="https://mehedihtml.com/chatbox/assets/img/user.png" alt="user img" />
																	</div>
																	<div className="flex-grow-1 ms-3">
																		<h3>Mehedi Hasan</h3>
																		<p>front end developer</p>
																	</div>
																</div>
															</div>
															<div className="col-4">
																<ul className="moreoption">
																	<li className="navbar   dropdown">
																		<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></a>
																		<ul className="dropdown-menu">
																			<li><a className="dropdown-item" href="#">Action</a></li>
																			<li><a className="dropdown-item" href="#">Another action</a></li>
																			<li>
																				<hr className="dropdown-divider" />
																			</li>
																			<li><a className="dropdown-item" href="#">Something else here</a></li>
																		</ul>
																	</li>
																</ul>
															</div>
														</div>
													</div>


													<div className="modal-body">
														<div className="msg-body">
															<ul>
																<li className="sender">
																	<p> Hey, Are you there? </p>
																	<span className="time">10:06 am</span>
																</li>
																<li className="sender">
																	<p> Hey, Are you there? </p>
																	<span className="time">10:16 am</span>
																</li>
																<li className="repaly">
																	<p>yes!</p>
																	<span className="time">10:20 am</span>
																</li>
																<li className="sender">
																	<p> Hey, Are you there? </p>
																	<span className="time">10:26 am</span>
																</li>
																<li className="sender">
																	<p> Hey, Are you there? </p>
																	<span className="time">10:32 am</span>
																</li>
																<li className="repaly">
																	<p>How are you?</p>
																	<span className="time">10:35 am</span>
																</li>
																<li>
																	<div className="divider">
																		<h6>Today</h6>
																	</div>
																</li>

																<li className="repaly">
																	<p> yes, tell me</p>
																	<span className="time">10:36 am</span>
																</li>
																<li className="repaly">
																	<p>yes... on it</p>
																	<span className="time">junt now</span>
																</li>

															</ul>
														</div>
													</div>


													<div className="send-box">
														<form action="">
															<input type="text" className="form-control" aria-label="message…" placeholder="Write message…" />

															<button type="button">
																<i className="fa fa-paper-plane" aria-hidden="true"></i> Send</button>
														</form>

													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section >
					{/* <!-- char-area --> */}
					<div className='container_20 '>ddd</div>
				</div>
			</main >
		</div >
	)
}

export default Chat