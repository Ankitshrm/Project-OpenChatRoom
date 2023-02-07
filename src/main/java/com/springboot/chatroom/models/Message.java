package com.springboot.chatroom.models;

public class Message {
	
	private String name;
	private String content;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public Message() {
		super();
	}
	public Message(String name, String content) {
		super();
		this.name = name;
		this.content = content;
	}
	@Override
	public String toString() {
		return "Message [name=" + name + ", content=" + content + "]";
	}
	
	
}