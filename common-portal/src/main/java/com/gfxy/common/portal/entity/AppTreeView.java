package com.gfxy.common.portal.entity;

/**
 * @author: lijixin 2019-05-17
 */
public class AppTreeView {
    private String id;
    private int isleaf;
    private String parentId;
    private String label;
    private String checked;
    private int ordernum;


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public int getIsleaf() {
        return isleaf;
    }

    public void setIsleaf(int isleaf) {
        this.isleaf = isleaf;
    }

    public String getParentId() {
        return parentId;
    }

    public void setParentId(String parentId) {
        this.parentId = parentId;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public String getChecked() {
        return checked;
    }

    public void setChecked(String checked) {
        this.checked = checked;
    }

    public int getOrdernum() {
        return ordernum;
    }

    public void setOrdernum(int ordernum) {
        this.ordernum = ordernum;
    }
}
