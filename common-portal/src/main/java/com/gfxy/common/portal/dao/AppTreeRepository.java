//package com.gfxy.common.portal.dao;
//
//import com.gfxy.common.portal.entrty1.AppTree;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.CrudRepository;
//import org.springframework.data.repository.query.Param;
//import org.springframework.stereotype.Repository;
//
//import java.util.List;
//
///**
// * @author: lijixin 2019-05-14
// */
//@Repository
//public interface AppTreeRepository  extends CrudRepository<AppTree,String> {
//
//    Iterable<AppTree> getAppTreeByParentId(String parentId);
//
//
//    @Query(value = "select * from APP_TREE where FIND_IN_SET(PARENT_ID,getChildrenMenu(:parentId))",nativeQuery=true)
//    Iterable<AppTree> getAppTreeByParentIdForMenu(@Param("parentId")String menuParentId);
//
//    @Query(value="SELECT\n" +
//            "            ID,\n" +
//            "            IS_LEAF   ISLEAF,\n" +
//            "            PARENT_ID PARENTID,\n" +
//            "            LABEL,\n" +
//            "            CASE (SELECT COUNT(*)\n" +
//            "                  FROM ROLE_RESOURCES M\n" +
//            "                  WHERE M.RESOURCE_ID = T.ID AND M.ROLE_ID\n" +
//            "                                                 = :roleId AND M.TYPE = 0)\n" +
//            "            WHEN 0\n" +
//            "                THEN\n" +
//            "                    'FALSE'\n" +
//            "            ELSE\n" +
//            "                'TRUE'\n" +
//            "            END       CHECKED,\n" +
//            "            ORDER_NUM\n" +
//            "        FROM APP_TREE T\n" +
//            "        WHERE ID IN (:systems)\n" +
//            "        UNION\n" +
//            "        SELECT\n" +
//            "            ID,\n" +
//            "            IS_LEAF   ISLEAF,\n" +
//            "            PARENT_ID PARENTID,\n" +
//            "            LABEL,\n" +
//            "            CASE (SELECT COUNT(*)\n" +
//            "                  FROM ROLE_RESOURCES M\n" +
//            "                  WHERE M.RESOURCE_ID = T.ID AND M.ROLE_ID\n" +
//            "                                                 = :roleId AND M.TYPE = 0)\n" +
//            "            WHEN 0\n" +
//            "                THEN\n" +
//            "                    'FALSE'\n" +
//            "            ELSE\n" +
//            "                'TRUE'\n" +
//            "            END       CHECKED,\n" +
//            "            ORDER_NUM\n" +
//            "        FROM APP_TREE T\n" +
//            "        where T.ID not in (:systems)\n" +
//            "ORDER BY PARENTID ASC, ORDER_NUM ASC" , nativeQuery = true)
//    List<Object[]> findAppTreeViewByRoleIdAndSystem(@Param("roleId")String roleId, @Param("systems") List<String> systems);
//}
