package com.jinqiuzhiku.alipay;

import com.alipay.sdk.app.EnvUtils;
import com.alipay.sdk.app.PayTask;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.Response;


import java.io.IOException;
import java.util.Map;

public class AlipayModule extends ReactContextBaseJavaModule {

    public AlipayModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "Alipay";
    }

    @ReactMethod
    public void pay(final String orderInfo, final Promise promise) {
        EnvUtils.setEnv(EnvUtils.EnvEnum.SANDBOX);
        Runnable payRunnable = new Runnable() {
            @Override
            public void run() {

                OkHttpClient client = new OkHttpClient();
                Request request = new Request.Builder()
                        .url("http://www.zxqc2019.cn:7777/pay-php-sdk/index.php")
                        .header("User-Agent", "OkHttp Headers.java")
                        .addHeader("Accept", "application/json; q=0.5")
                        .addHeader("Accept", "application/vnd.github.v3+json")
                        .build();
                String result1 = "";
                try {
                    Response response = client.newCall(request).execute();
                    result1 = response.body().string();
                    System.out.println(result1);
                } catch (IOException e) {
                    e.printStackTrace();
                }

                WritableMap map = Arguments.createMap();
                PayTask alipay = new PayTask(getCurrentActivity());
                Map<String, String> result = alipay.payV2(result1, true);
                for (Map.Entry<String, String> entry : result.entrySet())
                    map.putString(entry.getKey(), entry.getValue());
                promise.resolve(map);
            }
        };
        // 必须异步调用
        Thread payThread = new Thread(payRunnable);
        payThread.start();
    }

}
