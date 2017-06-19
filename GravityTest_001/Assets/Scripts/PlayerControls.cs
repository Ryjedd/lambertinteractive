using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerControls : MonoBehaviour {

    public float moveSpeed = 5;
    private Vector3 moveDir;

    float hTorq;

    void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
       
        moveDir = new Vector3(0, 0, Input.GetAxisRaw("Vertical")).normalized;
        hTorq = Input.GetAxis("Horizontal") * 5f * Time.deltaTime;

        if (Input.GetButton("Jump"))
            if(moveDir.y < .5)
                moveDir = new Vector3(moveDir.x * GetComponent<CharDash>().dashAmount, 5, moveDir.z * GetComponent<CharDash>().dashAmount);
    }

    private void FixedUpdate()
    {
        //GetComponent<Rigidbody>().RotateAround(transform.position, Vector3.up, Input.GetAxis("Horizontal"));

        // Quaternion deltaRotation = Quaternion.Euler( * Time.deltaTime);
        GetComponent<Rigidbody>().AddTorque(transform.up *  hTorq*3f);

        


        GetComponent<Rigidbody>().MovePosition(GetComponent<Rigidbody>().position + transform.TransformDirection(moveDir) * moveSpeed * Time.deltaTime);
    }

   
}
