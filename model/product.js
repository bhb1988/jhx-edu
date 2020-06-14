import {Base} from "@/utils/base.js"
class Product extends Base{
	constructor() {
		super();
	}
	//�γ��б�
	lists(param,callback) {
		var num = param.num ? param.num: 12;
		var params = {
		  url:'product/product/index?num='+num,
		  data:param,
		  method:'get',
		  sCallback:function(data){
			callback && callback(data);
		  }
		}
		this.request(params);
	}
	//��ҳ�γ̷���
	indexCate(param,callback) {
		var params = {
		  url:'product/product/index-cate',
		  data:param,
		  method:'get',
		  sCallback:function(data){
			callback && callback(data);
		  }
		}
		this.request(params);
	}
	//����
	view(param,callback) {
		var params = {
		  url:'product/product/view',
		  data:param,
		  method:'get',
		  sCallback:function(data){
			callback && callback(data);
		  }
		}
		this.request(params);
	}
	//Ŀ¼�б�
	content(param,callback) {
		var params = {
		  url:'product/product-content/index',
		  data:param,
		  method:'get',
		  sCallback:function(data){
			callback && callback(data);
		  }
		}
		this.request(params);
	}
	//Ŀ¼����
	contentView(param,callback) {
		var params = {
		  url:'product/product-content/view',
		  data:param,
		  method:'get',
		  sCallback:function(data){
			callback && callback(data);
		  }
		}
		this.request(params);
	}
	//�ղ�
	collectCreate(param,callback) {
		var params = {
		  url:'common/collect/create',
		  data:param,
		  method:'post',
		  sCallback:function(data){
			callback && callback(data);
		  }
		}
		this.request(params);
	}
	//ɾ���ղ�
	collectDelete(param,callback) {
		var params = {
		  url:'common/collect/delete?id='+param.id,
		  data:param,
		  method:'DELETE',
		  sCallback:function(data){
			callback && callback(data);
		  }
		}
		this.request(params);
	}
};

export { Product };