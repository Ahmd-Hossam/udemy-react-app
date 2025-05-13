function CustomeProvider() {
  return (
    <div>
      <h1> custome provider working fine</h1>;
      <ul>
        <li>Angular Service: تشبه React Context Provider </li>
        <li>
          {" "}
          Dependency Injection في Angular: تشبه استخدام useContext() أو Custom
          Hook في React للوصول للبيانات.{" "}
        </li>
        <li>
          {" "}
          @Injectable مع providedIn: 'root' ⇨ يجعل الخدمة متاحة للتطبيق كامل، زي
          الـ Provider في الأعلى.
        </li>
      </ul>
    </div>
  );
}

export default CustomeProvider;
