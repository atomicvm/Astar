(function() {var implementors = {};
implementors["pallet_plasm_rewards"] = [{"text":"impl&lt;T:&nbsp;Config&gt; StorageMap&lt;u32, &lt;&lt;T as Config&gt;::Currency as Currency&lt;&lt;T as Config&gt;::AccountId&gt;&gt;::Balance&gt; for ForDappsEraReward&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Config&gt; StorageMap&lt;u32, &lt;&lt;T as Config&gt;::Currency as Currency&lt;&lt;T as Config&gt;::AccountId&gt;&gt;::Balance&gt; for ForSecurityEraReward&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl StorageMap&lt;u32, u32&gt; for ErasStartSessionIndex","synthetic":false,"types":[]}];
implementors["pallet_plasm_validator"] = [{"text":"impl&lt;T:&nbsp;Config&gt; StorageMap&lt;u32, Vec&lt;&lt;T as Config&gt;::AccountId, Global&gt;&gt; for ElectedValidators&lt;T&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()