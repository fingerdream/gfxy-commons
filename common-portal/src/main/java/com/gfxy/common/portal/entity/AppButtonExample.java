package com.gfxy.common.portal.entity;

import java.util.ArrayList;
import java.util.List;

public class AppButtonExample {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table APP_BUTTON
     *
     * @mbggenerated Fri May 17 22:25:33 CST 2019
     */
    protected String orderByClause;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table APP_BUTTON
     *
     * @mbggenerated Fri May 17 22:25:33 CST 2019
     */
    protected boolean distinct;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table APP_BUTTON
     *
     * @mbggenerated Fri May 17 22:25:33 CST 2019
     */
    protected List<Criteria> oredCriteria;

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table APP_BUTTON
     *
     * @mbggenerated Fri May 17 22:25:33 CST 2019
     */
    public AppButtonExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table APP_BUTTON
     *
     * @mbggenerated Fri May 17 22:25:33 CST 2019
     */
    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table APP_BUTTON
     *
     * @mbggenerated Fri May 17 22:25:33 CST 2019
     */
    public String getOrderByClause() {
        return orderByClause;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table APP_BUTTON
     *
     * @mbggenerated Fri May 17 22:25:33 CST 2019
     */
    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table APP_BUTTON
     *
     * @mbggenerated Fri May 17 22:25:33 CST 2019
     */
    public boolean isDistinct() {
        return distinct;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table APP_BUTTON
     *
     * @mbggenerated Fri May 17 22:25:33 CST 2019
     */
    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table APP_BUTTON
     *
     * @mbggenerated Fri May 17 22:25:33 CST 2019
     */
    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table APP_BUTTON
     *
     * @mbggenerated Fri May 17 22:25:33 CST 2019
     */
    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table APP_BUTTON
     *
     * @mbggenerated Fri May 17 22:25:33 CST 2019
     */
    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table APP_BUTTON
     *
     * @mbggenerated Fri May 17 22:25:33 CST 2019
     */
    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table APP_BUTTON
     *
     * @mbggenerated Fri May 17 22:25:33 CST 2019
     */
    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    /**
     * This class was generated by MyBatis Generator.
     * This class corresponds to the database table APP_BUTTON
     *
     * @mbggenerated Fri May 17 22:25:33 CST 2019
     */
    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        public Criteria andIdIsNull() {
            addCriterion("ID is null");
            return (Criteria) this;
        }

        public Criteria andIdIsNotNull() {
            addCriterion("ID is not null");
            return (Criteria) this;
        }

        public Criteria andIdEqualTo(String value) {
            addCriterion("ID =", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotEqualTo(String value) {
            addCriterion("ID <>", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThan(String value) {
            addCriterion("ID >", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThanOrEqualTo(String value) {
            addCriterion("ID >=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThan(String value) {
            addCriterion("ID <", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThanOrEqualTo(String value) {
            addCriterion("ID <=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLike(String value) {
            addCriterion("ID like", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotLike(String value) {
            addCriterion("ID not like", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdIn(List<String> values) {
            addCriterion("ID in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotIn(List<String> values) {
            addCriterion("ID not in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdBetween(String value1, String value2) {
            addCriterion("ID between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotBetween(String value1, String value2) {
            addCriterion("ID not between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andAppIdIsNull() {
            addCriterion("APP_ID is null");
            return (Criteria) this;
        }

        public Criteria andAppIdIsNotNull() {
            addCriterion("APP_ID is not null");
            return (Criteria) this;
        }

        public Criteria andAppIdEqualTo(String value) {
            addCriterion("APP_ID =", value, "appId");
            return (Criteria) this;
        }

        public Criteria andAppIdNotEqualTo(String value) {
            addCriterion("APP_ID <>", value, "appId");
            return (Criteria) this;
        }

        public Criteria andAppIdGreaterThan(String value) {
            addCriterion("APP_ID >", value, "appId");
            return (Criteria) this;
        }

        public Criteria andAppIdGreaterThanOrEqualTo(String value) {
            addCriterion("APP_ID >=", value, "appId");
            return (Criteria) this;
        }

        public Criteria andAppIdLessThan(String value) {
            addCriterion("APP_ID <", value, "appId");
            return (Criteria) this;
        }

        public Criteria andAppIdLessThanOrEqualTo(String value) {
            addCriterion("APP_ID <=", value, "appId");
            return (Criteria) this;
        }

        public Criteria andAppIdLike(String value) {
            addCriterion("APP_ID like", value, "appId");
            return (Criteria) this;
        }

        public Criteria andAppIdNotLike(String value) {
            addCriterion("APP_ID not like", value, "appId");
            return (Criteria) this;
        }

        public Criteria andAppIdIn(List<String> values) {
            addCriterion("APP_ID in", values, "appId");
            return (Criteria) this;
        }

        public Criteria andAppIdNotIn(List<String> values) {
            addCriterion("APP_ID not in", values, "appId");
            return (Criteria) this;
        }

        public Criteria andAppIdBetween(String value1, String value2) {
            addCriterion("APP_ID between", value1, value2, "appId");
            return (Criteria) this;
        }

        public Criteria andAppIdNotBetween(String value1, String value2) {
            addCriterion("APP_ID not between", value1, value2, "appId");
            return (Criteria) this;
        }

        public Criteria andBtnIdIsNull() {
            addCriterion("BTN_ID is null");
            return (Criteria) this;
        }

        public Criteria andBtnIdIsNotNull() {
            addCriterion("BTN_ID is not null");
            return (Criteria) this;
        }

        public Criteria andBtnIdEqualTo(String value) {
            addCriterion("BTN_ID =", value, "btnId");
            return (Criteria) this;
        }

        public Criteria andBtnIdNotEqualTo(String value) {
            addCriterion("BTN_ID <>", value, "btnId");
            return (Criteria) this;
        }

        public Criteria andBtnIdGreaterThan(String value) {
            addCriterion("BTN_ID >", value, "btnId");
            return (Criteria) this;
        }

        public Criteria andBtnIdGreaterThanOrEqualTo(String value) {
            addCriterion("BTN_ID >=", value, "btnId");
            return (Criteria) this;
        }

        public Criteria andBtnIdLessThan(String value) {
            addCriterion("BTN_ID <", value, "btnId");
            return (Criteria) this;
        }

        public Criteria andBtnIdLessThanOrEqualTo(String value) {
            addCriterion("BTN_ID <=", value, "btnId");
            return (Criteria) this;
        }

        public Criteria andBtnIdLike(String value) {
            addCriterion("BTN_ID like", value, "btnId");
            return (Criteria) this;
        }

        public Criteria andBtnIdNotLike(String value) {
            addCriterion("BTN_ID not like", value, "btnId");
            return (Criteria) this;
        }

        public Criteria andBtnIdIn(List<String> values) {
            addCriterion("BTN_ID in", values, "btnId");
            return (Criteria) this;
        }

        public Criteria andBtnIdNotIn(List<String> values) {
            addCriterion("BTN_ID not in", values, "btnId");
            return (Criteria) this;
        }

        public Criteria andBtnIdBetween(String value1, String value2) {
            addCriterion("BTN_ID between", value1, value2, "btnId");
            return (Criteria) this;
        }

        public Criteria andBtnIdNotBetween(String value1, String value2) {
            addCriterion("BTN_ID not between", value1, value2, "btnId");
            return (Criteria) this;
        }

        public Criteria andBtnNameIsNull() {
            addCriterion("BTN_NAME is null");
            return (Criteria) this;
        }

        public Criteria andBtnNameIsNotNull() {
            addCriterion("BTN_NAME is not null");
            return (Criteria) this;
        }

        public Criteria andBtnNameEqualTo(String value) {
            addCriterion("BTN_NAME =", value, "btnName");
            return (Criteria) this;
        }

        public Criteria andBtnNameNotEqualTo(String value) {
            addCriterion("BTN_NAME <>", value, "btnName");
            return (Criteria) this;
        }

        public Criteria andBtnNameGreaterThan(String value) {
            addCriterion("BTN_NAME >", value, "btnName");
            return (Criteria) this;
        }

        public Criteria andBtnNameGreaterThanOrEqualTo(String value) {
            addCriterion("BTN_NAME >=", value, "btnName");
            return (Criteria) this;
        }

        public Criteria andBtnNameLessThan(String value) {
            addCriterion("BTN_NAME <", value, "btnName");
            return (Criteria) this;
        }

        public Criteria andBtnNameLessThanOrEqualTo(String value) {
            addCriterion("BTN_NAME <=", value, "btnName");
            return (Criteria) this;
        }

        public Criteria andBtnNameLike(String value) {
            addCriterion("BTN_NAME like", value, "btnName");
            return (Criteria) this;
        }

        public Criteria andBtnNameNotLike(String value) {
            addCriterion("BTN_NAME not like", value, "btnName");
            return (Criteria) this;
        }

        public Criteria andBtnNameIn(List<String> values) {
            addCriterion("BTN_NAME in", values, "btnName");
            return (Criteria) this;
        }

        public Criteria andBtnNameNotIn(List<String> values) {
            addCriterion("BTN_NAME not in", values, "btnName");
            return (Criteria) this;
        }

        public Criteria andBtnNameBetween(String value1, String value2) {
            addCriterion("BTN_NAME between", value1, value2, "btnName");
            return (Criteria) this;
        }

        public Criteria andBtnNameNotBetween(String value1, String value2) {
            addCriterion("BTN_NAME not between", value1, value2, "btnName");
            return (Criteria) this;
        }
    }

    /**
     * This class was generated by MyBatis Generator.
     * This class corresponds to the database table APP_BUTTON
     *
     * @mbggenerated do_not_delete_during_merge Fri May 17 22:25:33 CST 2019
     */
    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    /**
     * This class was generated by MyBatis Generator.
     * This class corresponds to the database table APP_BUTTON
     *
     * @mbggenerated Fri May 17 22:25:33 CST 2019
     */
    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}