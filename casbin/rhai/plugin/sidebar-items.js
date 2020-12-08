initSidebarItems({"attr":[["export_fn","Attribute, when put on a Rust function, turns it into a plugin function."],["export_module","Attribute, when put on a Rust module, turns it into a plugin module."]],"enum":[["CallableFunction","A type encapsulating a function callable by Rhai."],["EvalAltResult","Evaluation result."],["FnAccess","A type representing the access mode of a function."],["FnNamespace","A type representing the namespace of a function."]],"macro":[["combine_with_exported_module","Macro to combine a plugin module into an existing module."],["exported_module","Macro to generate a Rhai `Module` from a plugin module defined via `#[export_module]`."],["format","Creates a `String` using interpolation of runtime expressions."],["new_vec","Creates a `Vec` containing the arguments."],["register_exported_fn","Macro to register a plugin function (defined via `#[export_fn]`) into an `Engine`."],["set_exported_fn","Macro to register a plugin function into a Rhai `Module`."],["set_exported_global_fn","Macro to register a plugin function into a Rhai `Module` and expose it globally."]],"mod":[["mem","Basic functions for dealing with memory."],["new_vec","A contiguous growable array type with heap-allocated contents, written `Vec<T>`."]],"struct":[["Box","A pointer type for heap allocation."],["Dynamic","Dynamic type containing any value."],["Engine","Rhai main scripting engine."],["ImmutableString","The system immutable string type."],["Module","A module which may contain variables, sub-modules, external Rust functions, and/or script-defined functions."],["NativeCallContext","Context of a native Rust function call."],["TypeId","A `TypeId` represents a globally unique identifier for a type."]],"trait":[["PluginFunction","Trait implemented by a plugin function. This trait should not be used directly."],["RegisterFn","Trait to register custom functions with the [`Engine`]."],["RegisterResultFn","Trait to register fallible custom functions returning [`Result`]`<`[`Dynamic`]`, `[`Box`]`<`[`EvalAltResult`]`>>` with the [`Engine`]."],["ToString","A trait for converting a value to a `String`."]],"type":[["FnCallArgs","Arguments to a function call, which is a list of [`&mut Dynamic`][Dynamic]."]]});