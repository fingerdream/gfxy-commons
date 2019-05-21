package com.gfxy.common.util;

public enum ERestType {
	GET("GET", 1), POST("POST", 2), PUT("PUT", 3), DELETE("DELETE", 4);
	private String name;
	private int index;

	private ERestType(String name, int index) {
		this.name = name;
		this.index = index;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getIndex() {
		return index;
	}

	public void setIndex(int index) {
		this.index = index;
	}
}
